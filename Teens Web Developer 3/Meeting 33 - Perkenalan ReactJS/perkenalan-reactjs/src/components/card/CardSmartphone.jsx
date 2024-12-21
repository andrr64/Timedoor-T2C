import React from 'react'

export default function CardSmartphone(
    {
        nama_handphone,
        harga_handphone,
        gambar_handphone,
        unit_handphone
    }
) {
    return (
        <div className='col-md-6 col-lg-4 mb-4'>
            <div className='card h-100'>
                <img src={gambar_handphone} className='card-img-top img-fluid' alt={nama_handphone} />
                <div className='card-body'>
                    <p className='small'>Smartphone</p>
                    <div className="d-flex justify-content-between mb-2">
                        <h5>{nama_handphone}</h5>
                        <h5>{harga_handphone}</h5>
                    </div>

                    <div className="d-flex justify-content-between">
                        <p>Tersedia : <b>{unit_handphone}</b></p>
                        <div className="text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}