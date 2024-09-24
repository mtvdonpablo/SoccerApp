import Navbar from "../components/Navbar";
import './About.css';

function About() {
    return (
        <div className="aboutContainer">
            <section className="introSection">
                <h1>About Us</h1>
                <p>Welcome to Performance FC, a one-stop resource for soccer coaches looking to quickly find drills and exercises that help players and teams improve. As a coach myself, I realized there wasn’t a centralized place for volunteer and time-strapped coaches to easily access quality drills. Many coaches juggle busy schedules and need tools that make it simple to prepare for practices. That’s why I built this site—to provide coaches with a user-friendly database that saves time and helps create the best possible experience for young players. Whether you’re new to coaching or a seasoned pro, we’re here to support your team’s growth!</p>
            </section>

            <section className="missionSection">
                <h2>Our Mission</h2>
                <p>Our mission is to help players improve their skills by offering high-quality, engaging drills tailored to their age group and abilities. We believe in empowering coaches and athletes by providing accessible and effective training resources.</p>
            </section>

            <section className="teamSection">
                <h2>Meet the Team</h2>
                <div className="teamMembers">
                    <div className="teamMember">
                        <img src="/imgs/IMG_2162.JPG" alt="Don Joseph" />
                        <h3>Don Joseph</h3>
                        <p>Founder & Developer</p>
                        <p>Email: donjoseph28@gmail.com</p>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default About