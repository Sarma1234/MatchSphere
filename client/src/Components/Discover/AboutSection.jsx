
export default function AboutSection({ profile }) {

    return (

        <section className="discover-section glass">

            <h2>About</h2>

            <p>

                {profile?.bio?.trim() ||

                    "This user hasn't added a bio yet."}

            </p>

        </section>

    );

}

