import "./AppearanceSettings.css";


export default function AppearanceSettings() {

    return (

        <div className="appearance-settings-card">


            <div className="settings-section-title">

                <h2>
                    Appearance Settings
                </h2>

                <p>
                    Customize your MatchSphere visual experience
                </p>

            </div>



            <div className="appearance-options">



                <div className="appearance-option">

                    <div>

                        <h3>
                            Theme
                        </h3>

                        <p>
                            Choose your preferred interface mode
                        </p>

                    </div>


                    <select>

                        <option>
                            Futuristic Dark
                        </option>

                        <option>
                            Midnight Blue
                        </option>

                        <option>
                            Auto
                        </option>

                    </select>

                </div>




                <div className="appearance-option">

                    <div>

                        <h3>
                            Glow Intensity
                        </h3>

                        <p>
                            Adjust the interface glow effects
                        </p>

                    </div>


                    <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="70"
                    />

                </div>




                <div className="appearance-option">

                    <div>

                        <h3>
                            Compact Mode
                        </h3>

                        <p>
                            Reduce spacing for a smaller layout
                        </p>

                    </div>


                    <label className="toggle">

                        <input
                            type="checkbox"
                        />

                        <span></span>

                    </label>


                </div>




                <div className="appearance-option">

                    <div>

                        <h3>
                            Animations
                        </h3>

                        <p>
                            Enable smooth transitions and effects
                        </p>

                    </div>


                    <label className="toggle">

                        <input
                            type="checkbox"
                            defaultChecked
                        />

                        <span></span>

                    </label>


                </div>



            </div>


        </div>

    );

}