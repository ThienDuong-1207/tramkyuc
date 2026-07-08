"use client";

import { useRef, useState } from "react";
import type { Zone, ZoneAction } from "@/lib/zones";
import { getAudioUrl } from "@/lib/supabase";
import { ZoneArt } from "@/components/ZoneArt";
import styles from "./ZonePlayer.module.css";

type ActionKey = "primary" | "secondary";

export function ZonePlayer({ zone }: { zone: Zone }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeKey, setActiveKey] = useState<ActionKey | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorKey, setErrorKey] = useState<ActionKey | null>(null);

  const actions: Record<ActionKey, ZoneAction> = {
    primary: zone.primaryAction,
    secondary: zone.secondaryAction,
  };

  function handleToggle(key: ActionKey) {
    const audio = audioRef.current;
    if (!audio) return;
    const url = getAudioUrl(actions[key].storagePath);

    if (!url) {
      setActiveKey(key);
      setErrorKey(key);
      setIsPlaying(false);
      return;
    }

    if (activeKey === key && !audio.paused) {
      audio.pause();
      return;
    }

    setErrorKey(null);
    setActiveKey(key);
    if (audio.dataset.key !== key) {
      audio.src = url;
      audio.dataset.key = key;
    }
    audio.play().catch(() => setErrorKey(key));
  }

  const activeAction = activeKey ? actions[activeKey] : null;
  const isError = activeKey !== null && errorKey === activeKey;
  const showNowPlaying = activeKey !== null;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.art}>
          <span className={styles.eyebrow}>{zone.eyebrow}</span>
          <ZoneArt variant={zone.art} className={styles.illustration} />
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
          <h1 className={styles.title}>{zone.title}</h1>
          <p className={styles.subtitle}>{zone.subtitle}</p>

          <div className={styles.durationRow}>
            <span>{zone.durationLabel}</span>
            <span className={styles.dot} />
            <span>{zone.narratorLabel}</span>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnStory}`}
              onClick={() => handleToggle("primary")}
              aria-pressed={activeKey === "primary" && isPlaying}
            >
              <span className={styles.btnIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 4v16l16-8L4 4z" fill="#FBF3DE" />
                </svg>
              </span>
              <span className={styles.btnText}>
                {zone.primaryAction.title}
                <small>{zone.primaryAction.subtitle}</small>
              </span>
            </button>

            <button
              type="button"
              className={`${styles.btn} ${styles.btnMusic}`}
              onClick={() => handleToggle("secondary")}
              aria-pressed={activeKey === "secondary" && isPlaying}
            >
              <span className={styles.btnIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18V5l12-2v13"
                    stroke="#FBF3DE"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="6" cy="18" r="3" stroke="#FBF3DE" strokeWidth="1.8" />
                  <circle cx="18" cy="16" r="3" stroke="#FBF3DE" strokeWidth="1.8" />
                </svg>
              </span>
              <span className={styles.btnText}>
                {zone.secondaryAction.title}
                <small>{zone.secondaryAction.subtitle}</small>
              </span>
            </button>
          </div>

          <div
            className={`${styles.nowPlaying} ${showNowPlaying ? styles.show : ""}`}
            role="status"
            aria-live="polite"
          >
            <div className={styles.bars}>
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.nowPlayingText}>
              {isError
                ? "Chưa có file audio"
                : isPlaying
                  ? `Đang phát: ${activeAction?.title ?? ""}`
                  : `Đã tạm dừng: ${activeAction?.title ?? ""}`}
              <small>
                {isError
                  ? "Nội dung sẽ được cập nhật sớm — quay lại sau nhé"
                  : activeAction?.subtitle}
              </small>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.footerLogo}>
              <span>VN</span>
            </div>
            <span className={styles.footerText}>{zone.footerCredit}</span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setErrorKey(activeKey);
        }}
        className="sr-only"
      />
    </div>
  );
}
