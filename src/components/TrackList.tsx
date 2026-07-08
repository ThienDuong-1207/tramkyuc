"use client";

import { useRef, useState } from "react";
import { TRACKS } from "@/lib/tracks";
import { getAudioUrl } from "@/lib/supabase";
import styles from "./TrackList.module.css";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const SKIP_SECONDS = 10;

export function TrackList() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [errorIndex, setErrorIndex] = useState<number | null>(null);

  function handleRowClick(index: number) {
    const audio = audioRef.current;
    if (!audio) return;
    const track = TRACKS[index];
    const url = getAudioUrl(track.storagePath);

    if (!url) {
      setActiveIndex(index);
      setErrorIndex(index);
      setIsPlaying(false);
      return;
    }

    if (activeIndex === index) {
      if (audio.paused) {
        audio.play().catch(() => setErrorIndex(index));
      } else {
        audio.pause();
      }
      return;
    }

    setErrorIndex(null);
    setActiveIndex(index);
    setCurrentTime(0);
    setDuration(track.fallbackDuration);
    audio.src = url;
    audio.play().catch(() => setErrorIndex(index));
  }

  function handleSeek(value: number) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  }

  function handleSkip(delta: number) {
    const audio = audioRef.current;
    if (!audio || activeIndex === null) return;
    const next = Math.min(Math.max(audio.currentTime + delta, 0), duration || Infinity);
    audio.currentTime = next;
    setCurrentTime(next);
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.art}>
          <span className={styles.eyebrow}>Sân Chơi · Vó Ngựa</span>
          <svg
            className={styles.illustration}
            viewBox="0 0 200 200"
            fill="none"
            role="img"
            aria-label="Cổng tam quan sân chơi"
          >
            <rect x="45" y="90" width="16" height="90" fill="#A52E1F" />
            <rect x="139" y="90" width="16" height="90" fill="#A52E1F" />
            <rect x="92" y="70" width="16" height="110" fill="#A52E1F" />
            <path d="M30 95 Q100 55 170 95 L160 100 Q100 68 40 100 Z" fill="#C8402E" />
            <path d="M20 100 Q60 70 100 78 Q60 82 30 108 Z" fill="#5C6B3B" />
            <path d="M180 100 Q140 70 100 78 Q140 82 170 108 Z" fill="#5C6B3B" />
            <path
              d="M75 68 Q100 45 125 68 Q112 58 100 58 Q88 58 75 68Z"
              fill="#D9A441"
            />
            <circle cx="100" cy="52" r="6" fill="#F0CD4A" />
            <rect x="55" y="128" width="30" height="42" rx="3" fill="#F0CD4A" opacity="0.9" />
            <rect x="115" y="128" width="30" height="42" rx="3" fill="#F0CD4A" opacity="0.9" />
          </svg>
          <div className={styles.cloudBand}>
            <svg viewBox="0 0 400 46" preserveAspectRatio="none">
              <path
                d="M0,30 Q20,10 40,30 T80,30 T120,30 T160,30 T200,30 T240,30 T280,30 T320,30 T360,30 T400,30 V46 H0 Z"
                fill="#F3E3B8"
              />
            </svg>
          </div>
        </div>

        <div className={styles.waveStrip} />

        <div className={styles.body}>
          <h1 className={styles.title}>Nghe Truyện & Nhạc</h1>
          <p className={styles.subtitle}>
            Chọn một câu chuyện hoặc bản nhạc bé thích — bấm vào tên bài để nghe
            nhé!
          </p>

          <div className={styles.list}>
            {TRACKS.map((track, index) => {
              const isActive = activeIndex === index;
              const isError = isActive && errorIndex === index;
              const displayDuration = isActive ? duration : track.fallbackDuration;

              return (
                <div
                  key={track.storagePath}
                  className={`${styles.row} ${isActive ? styles.active : ""}`}
                >
                  <button
                    type="button"
                    className={styles.rowHeader}
                    onClick={() => handleRowClick(index)}
                    aria-pressed={isActive && isPlaying}
                  >
                    <span
                      className={`${styles.rowIcon} ${track.kind === "story" ? styles.story : styles.music}`}
                    >
                      {isActive && isPlaying ? (
                        <svg viewBox="0 0 24 24" fill="none">
                          <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                          <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
                        </svg>
                      ) : track.kind === "story" ? (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M4 4v16l16-8L4 4z" fill="currentColor" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M9 18V5l12-2v13"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
                          <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                      )}
                    </span>
                    <span className={styles.rowText}>
                      <span className={styles.rowTitle}>{track.title}</span>
                      <span className={styles.rowSubtitle}>{track.subtitle}</span>
                    </span>
                    <span className={styles.rowDuration}>
                      {formatTime(displayDuration)}
                    </span>
                  </button>

                  {isActive && !isError && (
                    <div className={styles.player}>
                      <div className={styles.seekRow}>
                        <span className={styles.time}>{formatTime(currentTime)}</span>
                        <input
                          type="range"
                          className={styles.seekBar}
                          min={0}
                          max={duration || track.fallbackDuration}
                          step={1}
                          value={currentTime}
                          onChange={(e) => handleSeek(Number(e.target.value))}
                          aria-label={`Tua ${track.title}`}
                        />
                        <span className={`${styles.time} ${styles.end}`}>
                          {formatTime(duration || track.fallbackDuration)}
                        </span>
                      </div>
                      <div className={styles.transport}>
                        <button
                          type="button"
                          className={styles.skipBtn}
                          onClick={() => handleSkip(-SKIP_SECONDS)}
                          aria-label="Tua lùi 10 giây"
                        >
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 5V1L7 6l5 5V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className={styles.playBtn}
                          onClick={() => handleRowClick(index)}
                          aria-label={isPlaying ? "Tạm dừng" : "Phát"}
                        >
                          {isPlaying ? (
                            <svg viewBox="0 0 24 24" fill="none">
                              <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 24 24" fill="none">
                              <path d="M6 4v16l14-8L6 4z" fill="currentColor" />
                            </svg>
                          )}
                        </button>
                        <button
                          type="button"
                          className={styles.skipBtn}
                          onClick={() => handleSkip(SKIP_SECONDS)}
                          aria-label="Tua tới 10 giây"
                        >
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 5V1l5 5-5 5V7a5 5 0 1 0 5 5h2a7 7 0 1 1-7-7z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {isError && (
                    <p className={styles.errorText}>
                      Chưa có file audio — sẽ được cập nhật sớm
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerLogo}>
            <span>VN</span>
          </div>
          <span className={styles.footerText}>Vó Ngựa · Góc kể chuyện dân gian</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onError={() => {
          setIsPlaying(false);
          setErrorIndex(activeIndex);
        }}
        className="sr-only"
      />
    </div>
  );
}
