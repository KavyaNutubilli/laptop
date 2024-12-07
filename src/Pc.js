import './Pc.css'

function Pc(){
    return(
        
        <div className="box">
            
            <div id="photo">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/b/n/-original-imagfdf4xnbyyxpa.jpeg?q=70" alt="laptop"></img>
            </div>
            <div id="details">
                <h3 id="name">Apple MacBook AIR Apple M2</h3>
                <ul>
                    <li>Apple M2 Proccessor</li>
                    <li>8 GB Unified Memory RAM</li>
                    <li>Mac OS Operating System</li>
                    <li>256 GB SSD</li>
                    <li>34.54cm (13.6 Inch) Dispaly</li>
                    <li>Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calender, Contacts, Remainders, Books, App Store, TV, Music, Podcasts</li>
                    <li>1 year Limited Warranty</li>
                </ul>
            </div>
            <div id="price"> 
                <span id="cost">₹73,990</span>
                <img id="image" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="flipcart-img"/>
                <p>Free delivery</p>
                <p id="offer">Save extra with combo offers</p>
                <p>Upto 28,000 Off on Exchange</p>
            </div>
       </div>
    )
}

export default Pc;