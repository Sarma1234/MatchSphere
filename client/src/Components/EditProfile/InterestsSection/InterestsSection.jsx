import "./InterestsSection.css";


const allInterests = [
    "Cafe Hopping",
    "Bollywood",
    "Hollywood",
    "Anime",
    "Comics",
    "Photography",
    "Content Creation",
    "Music",
    "Reading",
    "Fitness",
    "Movies",
    "Gaming",
    "Finance",
    "Public Speaking",
    "Psychology",
    "Podcasts",
    "Esports",
    "Nature"
];


export default function InterestsSection({

    profileData,

    setProfileData,

}) {


    const selectedInterests =
        profileData.interests || [];



    const toggleInterest = (interest) => {


        const exists =
            selectedInterests.includes(interest);



        let updatedInterests;



        if (exists) {


            updatedInterests =
                selectedInterests.filter(

                    (item) =>
                        item !== interest

                );


        }

        else {


            updatedInterests = [

                ...selectedInterests,

                interest

            ];


        }



        setProfileData({

            ...profileData,

            interests: updatedInterests,

        });


    };



    return (

        <section className="interests-section">


            <div className="section-heading">


                <h2>
                    Interests
                </h2>


                <p>
                    Choose interests that help us connect you with like-minded people.
                </p>


            </div>



            <div className="selected-interests">


                {selectedInterests.map((interest, index) => (


                    <button

                        key={index}

                        className="interest-pill active"

                        onClick={() =>
                            toggleInterest(interest)
                        }

                    >

                        {interest}

                    </button>


                ))}


            </div>



            <h4 className="interests-subtitle">

                Explore More

            </h4>



            <div className="interest-grid">


                {allInterests.map((interest, index) => (


                    <button

                        key={index}

                        className={
                            selectedInterests.includes(interest)
                                ? "interest-pill active"
                                : "interest-pill"
                        }

                        onClick={() =>
                            toggleInterest(interest)
                        }

                    >

                        {interest}

                    </button>


                ))}


            </div>


        </section>

    );

}