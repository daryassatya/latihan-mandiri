import React from 'react';

const firstName = 'Dimas';
const lastName = 'Aryasatya';
const pengurusDivisiSoftware = ['Ahmad Muji Burohman', 'Rifqi Rifaldi', 'Hendra', 'Nada Ika Sari', 'Angga Saeful'];
const list = pengurusDivisiSoftware.map((data) => {
    return(
            <li>{data}</li>
    );
});
const ml20 = {
    marginLeft : "20px"
}

function HelloWorld(){
    return (
        //Dipisah agar memberikan space tanpa mengconcate 3 kali
        <div>
            <h1 style={ml20}>{firstName}{lastName}</h1>
            <span style={ml20}>Pengurus Divisi Software :</span>
            <ul>
                {list}
            </ul>
        </div>
    )
};


export default HelloWorld;