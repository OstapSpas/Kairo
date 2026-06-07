export default function SettingItem({id, title }) {
    return (

        <li className="settings-item">
        <button className="settings-button" type="button">
            <span>{title}</span>
        </button>
        </li>
    );
}