
import "./Discover.css";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ProfileHero from "../../components/Discover/ProfileHero";
import AboutSection from "../../components/Discover/AboutSection";
import SkillsSection from "../../components/Discover/SkillsSection";
import PurposeSection from "../../components/Discover/PurposeSection";
import CompatibilitySection from "../../components/Discover/CompatibilitySection";
import ActionButtons from "../../components/Discover/ActionButtons";

import {
    getNextProfile,
    swipeLeft,
    swipeRight,
} from "../../services/discoverService";

export default function Discover() {

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [swiping, setSwiping] = useState(false);

    /* ---------------------------------------------------------------------- */
    /*                         Load Discover Profile                          */
    /* ---------------------------------------------------------------------- */

    const loadNextProfile = async () => {

        try {

            setLoading(true);

            setError("");

            const response = await getNextProfile();

            setProfile(response.data.data);

        }

        catch (err) {

            console.error(err);

            setProfile(null);

            setError(

                err.response?.data?.message ||

                "Unable to load profiles."

            );

        }

        finally {

            setLoading(false);

        }

    };

    /* ---------------------------------------------------------------------- */

    useEffect(() => {

        loadNextProfile();

    }, []);

    /* ---------------------------------------------------------------------- */
    /*                               Pass                                     */
    /* ---------------------------------------------------------------------- */
/* ---------------------------------------------------------------------- */
/*                               Pass                                     */
/* ---------------------------------------------------------------------- */

const handlePass = async () => {

    if (!profile || swiping) return;

    try {

        setSwiping(true);

        await swipeLeft({

            targetUserId: profile._id,

        });

        await loadNextProfile();

    }

    catch (err) {

        console.error(err);

        if (err.response?.status === 409) {

            await loadNextProfile();

            return;

        }

        toast.error(

            err.response?.data?.message ||

            "Unable to pass profile."

        );

    }

    finally {

        setSwiping(false);

    }

};
    /* ---------------------------------------------------------------------- */
    /*                             Connect                                    */
    /* ---------------------------------------------------------------------- */

    /* ---------------------------------------------------------------------- */
/*                             Connect                                    */
/* ---------------------------------------------------------------------- */

const handleConnect = async () => {

    if (!profile || swiping) return;

    try {

        setSwiping(true);

        const response = await swipeRight({

            targetUserId: profile._id,

        });

        if (response.data.data?.matched) {

            toast.success("🎉 It's a Match!");

        }

        await loadNextProfile();

    }

    catch (err) {

        console.error(err);

        if (err.response?.status === 409) {

            await loadNextProfile();

            return;

        }

        toast.error(

            err.response?.data?.message ||

            "Unable to connect."

        );

    }

    finally {

        setSwiping(false);

    }

};

    /* ---------------------------------------------------------------------- */

    if (loading) {

        return (

            <div className="discover-loading">

                Loading profiles...

            </div>

        );

    }

    if (error) {

        return (

            <div className="discover-loading">

                {error}

            </div>

        );

    }

    if (!profile) {

        return (

             <div className="discover-loading">

            <h2>🎉 You're all caught up!</h2>

            <p>

                You've already discovered everyone for your current purpose.

            </p>

            <p>

                Try switching your active purpose or check back later.

            </p>

        </div>

        );

    }

    return (

        <>

            <ActionButtons

                onPass={handlePass}

                onConnect={handleConnect}

                disabled={swiping}

            />

            <div className="discover-page">

                <ProfileHero profile={profile} />

                <AboutSection profile={profile} />

                <SkillsSection skills={profile.skills} />

                <PurposeSection profile={profile} />

                <CompatibilitySection

                    compatibility={profile.compatibility}

                />

            </div>

        </>

    );

}

