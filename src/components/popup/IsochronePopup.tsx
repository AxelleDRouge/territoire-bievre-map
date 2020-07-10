import React, { useContext, SyntheticEvent } from 'react';
import { Popup } from 'react-leaflet';
import { profile } from './profile';
import { StoreContext } from '../../context/StoreContext';

const IsochronePopup: React.FC = () => {
    const { setProfile, setType, setValue, searchIsochrone, type, setIsochroneResult } = useContext(StoreContext)

    const handleProfileChange = (e: SyntheticEvent) => {
        const value = (e.currentTarget as any).value
        const selectedProfile = profile.find(pro => pro.value === value)
        setProfile(selectedProfile)
    }

    const handleTypeChange = (e: SyntheticEvent) => {
        setType((e.currentTarget as any).value)
    }

    const handleValueChange = (e: SyntheticEvent) => {
        let value = (e.currentTarget as any).value;
        if (type === "time") value = value * 60
        setValue(value)
    }

    return <Popup className="popup">
        <header className="header">
            Evaluer la zone du Territoire de la Bièvre
        </header>
        <article>
            <label htmlFor="profile">Sélectionner la valeur de référence</label>
            <select id="profile" onChange={(e) => handleProfileChange(e)}>
                {profile.map((pro, index) => <option key={index} value={pro.value}>{pro.name}</option>)}
            </select>

            <label htmlFor="type">Sélectionner le moyen de transport</label>
            <select id="type" onChange={(e) => handleTypeChange(e)}>
                <option value={"time"}>Temps (en minutes, max 50)</option>
                <option value={"distance"}>Distance (en kilomètres)</option>
            </select>

            <label htmlFor="value">Sélectionner la valeur</label>
            <input id="value" type="number" onChange={(e) => handleValueChange(e)}></input>

            <button onClick={() => searchIsochrone()}>Tracer</button>
        </article>

        <button className={"button--removeIsochrone"} onClick={() => setIsochroneResult([])}>Supprimer les polygones</button>

    </Popup>;
}

export default IsochronePopup
