import React from "react";

function GoldInstrument({
    removeGoldInstrument,
    weight,
    goldPrice,
    nickName,
    purchaseDate,
    purity
}) {

    const deleteInstrument = () => {
        removeGoldInstrument(nickName, instrumentPrice);
    }

    const internationalNumberFormat = new Intl.NumberFormat('en-IN')

    const instrumentPrice = Number(weight) * Number(goldPrice);

    return (
        < div className="container mx-auto p-2 border-4 border-emerald-700 bg-green-400 m-4 ">
            < div className="flex justify-end" >
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor"
                    onClick={deleteInstrument}>X</button>
            </div >
            <div className="text-xl"><strong>{nickName}</strong></div>
            <div className="instrumentType">Weight : <strong>{weight}g</strong> | Gold Price (/gm) : <strong>₹{goldPrice}</strong></div>
            <div className="flex-row">
                <div className="flex justify-between">
                    <h3 className="instrumentTenure">Purity :
                        <strong>{purity}</strong> | Date of Purchase : <strong>{purchaseDate}
                        </strong></h3>
                    <h3 className="instrumentAmount">
                        <strong>₹{internationalNumberFormat.format(instrumentPrice)}</strong>
                    </h3>
                </div>
            </div>
        </div >
    )
}

export default GoldInstrument