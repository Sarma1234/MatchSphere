import "./ProfilePreview.css";

import {
    MapPin,
    GraduationCap,
    Briefcase
} from "lucide-react";


export default function ProfilePreview({

    profileData

}) {


    const primaryPhoto =

        profileData.photos?.find(
            photo => photo.isPrimary
        )
        ||
        profileData.photos?.[0];



    return (

        <aside className="profile-preview">



            <div className="preview-cover">


                <img

                    src={
                        profileData.coverPhoto?.url
                        ||
                        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200"
                    }

                    alt="Cover"

                />


            </div>




            <div className="preview-content">



                <div className="preview-avatar">


                    <img

                        src={

                            primaryPhoto?.url

                            ||

                            "https://i.pravatar.cc/300"

                        }

                        alt="Profile"

                    />


                </div>





                <h2>

                    {profileData.fullName || "Your Name"}

                </h2>





                <span className="preview-purpose">


                    {profileData.activePurpose || "Select Purpose"}


                </span>





                <p className="preview-bio">


                    {
                        profileData.bio
                        ||
                        "Your profile description will appear here."
                    }


                </p>





                <div className="preview-details">





                    <div className="preview-item">


                        <MapPin size={16}/>


                        <span>


                            {
                                profileData.location?.city
                                ||
                                "Location"
                            }

                            {
                                profileData.location?.country
                                &&
                                `, ${profileData.location.country}`
                            }


                        </span>


                    </div>






                    <div className="preview-item">


                        <GraduationCap size={16}/>


                        <span>


                            {

                                profileData.education?.college

                                ||

                                "College / Education"

                            }


                        </span>


                    </div>






                    <div className="preview-item">


                        <Briefcase size={16}/>


                        <span>


                            {

                                profileData.professional?.title

                                ||

                                "Profession"

                            }


                        </span>


                    </div>





                </div>







                <div className="preview-tags">



                    {

                        profileData.skills

                        ?

                        profileData.skills.map(

                            (skill,index)=>(


                                <span key={index}>


                                    {skill.name}


                                </span>


                            )

                        )

                        :

                        null

                    }



                </div>





            </div>




        </aside>

    );

}