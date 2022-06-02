import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>FitClass - UI Design</title>
        <meta
          name="description"
          content="Created for Fueler Proof of Work Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        {/* Left */}
        <div className={styles.left}>
          {/* Logo */}
          <Link href="/">
            <a className={styles.logo}>FitClass</a>
          </Link>
        </div>

        {/* Middle */}
        <nav className={styles.middle}>
          <HeaderLink href="#">Features</HeaderLink>
          <HeaderLink href="#">Pricing</HeaderLink>
          <HeaderLink href="#">Community</HeaderLink>
          <HeaderLink href="#">Lifestyle</HeaderLink>
        </nav>

        {/* Right */}
        <div className={styles.right}>
          {/* App Icons */}
          <div className={styles.appIcons}>
            {/* Play Store */}
            <Link href="#play">
              <a className={styles.icon}>
                <Image
                  src="/icons/play.svg"
                  alt="Google Play"
                  height={20}
                  width={20}
                />
              </a>
            </Link>
            {/* App Store */}
            <Link href="#app-store">
              <a className={styles.icon}>
                <Image
                  src="/icons/app-store.svg"
                  alt="App Store"
                  height={20}
                  width={20}
                />
              </a>
            </Link>
          </div>

          {/* Header CTA */}
          <Link href="#" passHref>
            <a className={styles.cta}>Get Free Trial</a>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Left - Content */}
          <article className={styles.left}>
            {/* Heading */}
            <h1 className={styles.heading}>
              One step towards a healthy lifestyle
            </h1>

            {/* Subheading */}
            <p className={styles.subheading}>
              Healthy body is the secret of healthy lifestyle. Start your day
              with BitClass. Book a free trial.
            </p>

            {/* CTAs */}
            <div className={styles.CTAs}>
              <button className={[styles.CTA, styles.fill].join(" ")}>
                Get Free Trial
              </button>
              <button className={[styles.CTA, styles.outline].join(" ")}>
                Invite Friends
              </button>
            </div>

            {/* Rating */}
            <div className={styles.ratings}>
              {/* Star Rating */}
              <div className={styles.starRating}>
                <span className={styles.star}>
                  <Image
                    height={23}
                    width={23}
                    alt="Star"
                    src="/icons/star.svg"
                  />
                </span>
                4.8 Rating
              </div>
              {/* People */}
              <div className={styles.people}>
                <Image
                  width={134}
                  height={37}
                  alt="People"
                  src="/images/people.svg"
                />
                300+ joined
              </div>
            </div>
          </article>

          <article className={styles.right}>
            {/* Hero Image */}
            <div className={styles.image}>
              <Image
                height={528}
                width={830}
                alt="Lady in stretching pose"
                src="/images/hero-lady.png"
              />
            </div>

            {/* Fueler Watermark */}
            <div className={styles.watermark}>
              Powered by{" "}
              <span className={styles.icon}>
                <Image
                  height="18"
                  width="18"
                  src="/icons/fueler.svg"
                  alt="Fueler logo"
                />
              </span>{" "}
              Fueler
            </div>
          </article>
        </section>

        {/* Top Workout Section */}
        <section className={styles.topWorkout}>
          {/* Heading */}
          <h2 className={styles.heading}>Top Workouts</h2>

          {/* List */}
          <WorkoutList
            items={[
              {
                title: "Yoga Training",
                subheading: "For Beginners",
                stats: ["🧘‍♀️ 15 Min", "🔥 200 Cal"],
                image: {
                  width: 203,
                  height: 243,
                },
              },
              {
                title: "Cardio Training",
                subheading: "For Intermediates",
                stats: ["🏃‍♀️ 28 Min", "🔥 260 Cal"],
                image: {
                  width: 203,
                  height: 243,
                },
              },
              {
                title: "CrossFit Training",
                subheading: "For Experts",
                stats: ["🏋️‍♀️ 14 Min", "🔥 350 Cal"],
                image: {
                  width: 203,
                  height: 243,
                },
              },
            ]}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        Created with &lt;3 by{" "}
        <Link href="https://twitter.com/Just_Moh_it">
          <a className={styles.underline}>Mohit Yadav</a>
        </Link>
      </footer>
    </div>
  );
}

const HeaderLink = ({ href, children }) => (
  <Link href={href} passHref>
    <a className={styles.headerLink}>{children}</a>
  </Link>
);

const WorkoutList = ({ items }) => (
  <ul className={styles.workoutList}>
    {items.map(
      ({ title, subheading, stats, image: { height, width } }, idx) => (
        <li className={styles.item} key={idx}>
          {/* Title */}
          <h3 className={styles.title}>{title}</h3>
          {/* Subheading */}
          <p className={styles.subheading}>{subheading}</p>
          {/* Stats list */}
          <ul className={styles.stats}>
            {stats.map((value, i) => (
              <li className={styles.stat} key={i}>
                {value}
              </li>
            ))}
          </ul>

          {/* Image - Absolute */}
          <div className={styles.image}>
            <Image
              height={height}
              width={width}
              alt={`${title} Demo Image`}
              src={`/images/workout-items/${
                { 1: "first", 2: "second", 3: "third" }[idx + 1]
              }.png`}
            />
          </div>
        </li>
      )
    )}
  </ul>
);
