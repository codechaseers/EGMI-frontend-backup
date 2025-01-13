const ShowAddressSection=({item,i,DeleteAddress,togglePopup2})=>{
    let data = JSON.parse(item.address);
     
    return (
        <>
            <div className="account__block-item" key={i}>
            <div className="account__addresses-list">
              <div className="account__address active ">
                <div className="account__address_crts">
                  {/* <div className="account__address_crts_checkbox">
                                        <input type="checkbox" checked="" />
                                    </div> */}
                  <div className="account__address_crts_account">   
                    <span className="account__address-title heading heading--small">
                     {` Address ${i+1} `}
                    </span>
                   
                    <div className="account__address-details">
                      <span>{data.Area}</span>, <span>{data.Flat}</span> 
                      , <span>{data.City}</span>, <span>{data.PinCode}</span>
                      ,  <span>{`+91${data.PhoneNumber}`}</span>
                    </div>
                  </div>
                </div>
                <div className="account__address-actions">
                  {/* <button className="link text_subdued_edit" onClick={togglePopup2}>Edit</button> */}
                  <button className="link text_subdued_delete">
                    <i className="fa fa-trash-o" onClick={()=>DeleteAddress(item.id)}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </>
    )
}
export default ShowAddressSection