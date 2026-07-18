import "./ProfileCompletion.css";


export default function ProfileCompletion({
    percentage
}) {


    return (

        <div className="completion-wrapper">


            <div
                className="completion-ring"
                style={{
                    "--progress":
                    `${percentage}%`
                }}
            >

                <span>
                    {percentage}%
                </span>


            </div>


            <p>
                Profile Completed
            </p>


        </div>

    );

}