// let getBtn = document.querySelector('button');

// function getBtnAll(){
//     fetch('https://northwind.vercel.app/api/suppliers')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// getBtn.addEventListener('click', getBtnAll)

let form = document.querySelector('#myF');
let companyInp = document.querySelector('.companyName');
let contactInp = document.querySelector('.contactName');
let titleInp = document.querySelector('.title');
let sendBtn = document.querySelector('#send')
let body = document.querySelector('#main')

form.addEventListener('submit', (e)=>{

    e.preventDefault()
    let obj = {
        CompanyName: companyInp.value,
        ContactName: contactInp.value,
        ContactTitle: titleInp.value
    }
    axios.post('https://northwind.vercel.app/api/suppliers', obj).then(res => {

        body.innerHTML +=
        //  res.data.forEach(supplier => {
        //     return
         `
                    <tr>
                        <td>
                            ${res.data.CompanyName}
                        </td>
                        <td>
                            ${res.data.ContactName}
                        </td>
                        <td>
                            ${res.data.ContactTitle}
                        </td>
                    </tr>
                    `
        // }
        // );
        // console.log(res.data);
    })
})