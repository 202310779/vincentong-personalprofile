'use client';

interface ProfileCardProps {
  onOpenOverlay: () => void;
}

export default function ProfileCard({ onOpenOverlay }: ProfileCardProps) {
  return (
    <div className="card">
      <div className="left-section">
        <img
          src="/images/vincent.png"
          alt="Profile Picture"
          className="profile-pic"
          onClick={onOpenOverlay}
        />
      </div>

      <div className="content-section">
        <h1 id="name">Vincent David Ong</h1>
        <p className="bio">
          I am a IT student at Gordon College and an aspiring Frontend
          Developer. I enjoy creating visuals and exploring how design and
          technology can connect people. Outside of school, I love Cycling,
          Nature Trips, and Listening to music, which inspire much of my
          creativity.
        </p>

        <div className="social-bg">
          <a href="https://www.facebook.com/vincentdavid.ong/" target="_blank" rel="noreferrer">
            <img src="/images/facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/binsentttong/" target="_blank" rel="noreferrer">
            <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://github.com/202310779" target="_blank" rel="noreferrer">
            <img src="/images/github.png" alt="GitHub" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/vincent-david-ong-5b9864311/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/@vincentong697" target="_blank" rel="noreferrer">
            <img src="/images/youtube.png" alt="Youtube" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com/@vincent..ong" target="_blank" rel="noreferrer">
            <img src="/images/tiktok.png" alt="tiktok" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
