import { useState } from "react";

import BottomNav from "../../components/Navbar/BottomNav";
import LeftArrow from "../../assets/icons/btn-left.svg"

import SettingItem from "./SettingItem";

export default function SettingPage() {

    const settingsButtons = [
        { id: 1, title: "Edit Profile", type: "button" },
        { id: 2, title: "Notifications", type: "button" },
        { id: 3, title: "Daily Reminder", type: "button" },
        { id: 4, title: "Privacy Policy", type: "button" },
        { id: 5, title: "Terms & Conditions", type: "button" },
        { id: 6, title: "Themes", type: "button" },
    ];



    return (
        <div className="page setting-page">
            <div className="profile-block">
                <div className="profile-block-btn">
                    <button type="button">
                        <img src={LeftArrow} alt="Back" />
                    </button>
                </div>

                <div className="profile-logo"></div>

                <h2 className="profile-name">Ostap</h2>
            </div>

            <ul className="settings-list">
                {settingsButtons.map((btn) => (
                    <SettingItem
                        key={btn.id}
                        title={btn.title}

                    />
                ))}

            </ul>


            <BottomNav />
        </div>
    );
} 