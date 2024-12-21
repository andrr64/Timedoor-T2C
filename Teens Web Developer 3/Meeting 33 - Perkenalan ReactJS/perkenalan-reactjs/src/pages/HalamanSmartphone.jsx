import React from 'react'
import CardSmartphone from '../components/card/CardSmartphone'

export default function HalamanSmartphone() {
    return (
        <div className='container'>
            <div className='row'>
                <CardSmartphone
                    nama_handphone='POCO C75'
                    harga_handphone='IDR 1.700.000'
                    gambar_handphone='https://media.dinomarket.com/docs/imgTD/2024-11/DM_239A9F02-088D-3042-5656C149F369B05C_ll.jpg'
                    unit_handphone='100'
                />

                <CardSmartphone
                    nama_handphone='POCO X6'
                    harga_handphone='IDR 4.700.000'
                    gambar_handphone='https://i02.appmifile.com/527_item_id/19/01/2024/2b3e12157447623d220a2e78e255d305!800x800!85.png'
                    unit_handphone='10'
                />
            </div>
        </div>
    )
}
