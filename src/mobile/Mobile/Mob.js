import React, { useState } from 'react';

const Mob = () => {
    const [charge, setCharge] = useState(100)
    const seeBatteryCharge = () => {
        if (charge) {
            const b = charge - 10;
            setCharge(b)
        }

    }

    return (
        <div>
            <h4>Batter charge <span>{charge}</span>%</h4>
            <button onClick={seeBatteryCharge}>Battery Down</button>
        </div>
    );
};

export default Mob;