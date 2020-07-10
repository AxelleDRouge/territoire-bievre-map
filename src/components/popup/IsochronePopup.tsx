import React, { useContext, SyntheticEvent } from 'react';
import { Popup } from 'react-leaflet';
import { profile } from './profile';
import { StoreContext } from '../../context/StoreContext';

const IsochronePopup: React.FC = () => {
    const { setProfile, setType, setValue } = useContext(StoreContext)

    const handleProfileChange = (e: SyntheticEvent) => {
        const value = (e.currentTarget as any).value
        const selectedProfile = profile.find(pro => pro.value === value)
        setProfile(selectedProfile)
    }

    const handleTypeChange = (e: SyntheticEvent) => {
        setType((e.currentTarget as any).value)
    }

    return <Popup>
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
                <option value={"time"}>Temps</option>
                <option value={"distance"}>Distance</option>
            </select>

            <label htmlFor="value">Sélectionner la valeur</label>
            <input id="value" type="number" onChange={(e) => setValue(e.target.value)}></input>

            <button>Tracer</button>
        </article>
    </Popup>;
}

export default IsochronePopup
