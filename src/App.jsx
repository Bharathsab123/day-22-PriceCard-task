import React from 'react'
import './App.css'
function App() {
  document.title="Price Card"
  const data1=[{
    top:" FREE",
    topenable: "blur",
    doller:0 ,
    user:" ✔ Single User",
    storage:" ✔ 50GB Storage",
    publicproject:" ✔ Unlimited Public Projects",
    access:" ✔ Community Access",
    privateproject:"✖ Unlimited Private Projects",
    priProject:"blur",
    phonesupport:"✖ Dedicated Phone Support",
    PhoneSupport:"blur",
    subdomain:"✖ Free Subdomain",
    subdomaines:"blur",
    report:"✖ Monthly Status Report",
    reports:"blur"
  },
  
  {
    top:"PLUS",
    topenable: "blur",
    doller:9,
    user:" ✔ Single User",
    storage:" ✔ 50GB Storage",
    publicproject:" ✔ Unlimited Public Projects",
    access:" ✔ Community Access",
    privateproject:"✔ Unlimited Private Projects",
    phonesupport:"✔ Dedicated Phone Support",
    subdomain:"✔ Free Subdomain",
    report:"✖ Monthly Status Report",
    reports:"blur"
  },
  {
    top:" PRO",
    topenable: "blur",
    doller:49 ,
    user:" ✔ Single User",
    storage:" ✔ 50GB Storage",
    publicproject:" ✔ Unlimited Public Projects",
    access:" ✔ Community Access",
    privateproject:"✔ Unlimited Private Projects",
    phonesupport:"✔ Dedicated Phone Support",
    subdomain:"✔ Free Subdomain",
    report:"✔ Monthly Status Report"
  }
]


  return (
    <div className="cards">
      {data1.map((val,inx)=>(
        <PriceCard key={inx}
        topenable={val.topenable}
        priProject={val.priProject}
        PhoneSupport={val.PhoneSupport}
        subdomaines={val.subdomaines}
        reports={val.reports}
        top={val.top}
        doller={val.doller}
        user={val.user}
        storage={val.storage}
        publicproject={val.publicproject}
        access={val.access}
        privateproject={val.privateproject}
        phonesupport={val.phonesupport}
        subdomain={val.subdomain}
        report={val.report}
       />
      ))}
    </div>
  
  )
  
}

export default App


function PriceCard({top,topenable,priProject,PhoneSupport,subdomaines,reports,doller,user,storage,publicproject,access,privateproject,phonesupport,subdomain,report}){ 
  return (
   <div className="pricecard">
    <div className="header">
      <p className={topenable}>{top}</p>
      <h1>${doller}/month</h1>
    </div>
    <div className="content">
      <p>{user}</p>
      <p>{storage}</p>
      <p>{publicproject}</p>
      <p>{access}</p>
      <p className={priProject}>{privateproject}</p>
      <p className={PhoneSupport}>{phonesupport}</p>
      <p className={subdomaines} >{subdomain}</p>
      <p className={reports}>{report}</p>
    </div>
    <div className="btn">
      <button>BUTTON</button>
    </div>
   </div>


  )
  
}
