
function Shipping(){

    return (<>
        <div className="Shipping">
            <h3>Shipping and Delivery</h3>
            <p>Last updated on Jan 28 2024</p>
            <p>Shipping is not applicable for business.</p>


           



        </div>
<style>
    {`
    
    .Shipping {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        text-align: center;
        box-shadow: 10px 10px 5px lightblue;
    }

    @media only screen and (max-width: 767px) { 

        .Shipping {
            width: 70%;
            margin-top: 50px;
        }
        }

        @media only screen and (max-width: 540px) { 
            .Shipping {
                width: 85%;
            }
            }
    `}
</style>

    </>)
}

export default Shipping