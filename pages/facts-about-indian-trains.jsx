import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FactsAboutTrain = () => {



  const data = [
    {
      heading: "169 Years Old",
      para: "The Indian Railways traces its roots back to April 16, 1853, when its inaugural passenger train journeyed from Mumbai's Bori Bandar to Thane, covering 34 kilometers. The train, pulled by three locomotives named Sahib, Sultan, and Sindh, comprised 30 wagons.",
      imagelink: "https://www.past-india.com/wp-content/uploads/2021/05/DSC_0485.jpg",
    },
    {
      heading: "4 UNESCO World Heritage Sites",
      para: "Indian Railways boasts ownership of four UNESCO-recognized world heritage sites: Darjeeling Himalayan Railway (1999), Chhatrapati Shivaji Terminus, Mumbai (2004), Nilgiri Mountain Railway (2005), and Kalka Shimla Railway (2008). Moreover, it's poised to add two more UNESCO sites: Matheran Light Railway and Kangra Valley Railway.",
      imagelink: "https://assets.tripzilla.com/media/38099/conversions/01HGZ55Q5SR4J84SJ3G2MMSHNX-w768.webp",
    },
    {
      heading: "Incredible Venues like Museums, Heritage Gallery, Art Gallery, and Heritage Park",
      para: "Indian Railways hosts 34 operational rail museums and three under-construction sites, including Heritage Gallery, Art Gallery, and Heritage Park across various Indian cities. These venues serve to preserve and promote rail tourism, with the Delhi Rail Museum leading as the nation's first railway museum.",
      imagelink: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6f/88/14/western-railway-heritage.jpg?w=1200&h=1200&s=1",
    },
    {
      heading: "Gorakhpur is World’s Longest Platform",
      para: "The title of the world's longest platform, initially held by Gorakhpur Railway Station in Uttar Pradesh, is slated to be overtaken by Hubli Junction Railway Station, Karnataka. The under-construction platform at Hubli spans an impressive 1,505 meters, surpassing Gorakhpur's 1,366 meters.",
      imagelink: "https://s1.dmcdn.net/v/PBfzA1S8p_EBdEdDE/x1080",
    },
    {
      heading: "Elephant Dressed As A Railway Guard",
      para: "An endearing aspect of the Indian Railways is its mascot, 'Shubhankar' named Bholu. Designed in 2002 by the National Institute of Design to commemorate the 150th anniversary of the railways, Bholu is an elephant dressed as a railway guard. In 2003, the Railways officially adopted Bholu as its mascot.",
      imagelink: "https://c8.alamy.com/comp/E6BN46/a-model-elephant-as-a-station-master-on-the-platform-at-barog-railway-E6BN46.jpg",
    },
    {
      heading: "Established Before Independence",
      para: "The first railway workshop under British rule was established in Jamalpur, near Munger, Bihar, in 1862, well before Indian independence. Over time, Jamalpur evolved into a significant industrial unit, featuring iron and steel foundries, rolling mills, and more.",
      imagelink: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeI-lmnD1jG1VF4gs-UkrpWOd8f59bNiAS1nnKLy8rD8-GETVhoU5EElXz5rDESRSMNDAKrFLEPZK8OmDo8R3iQjiPTka5owfFirhkbhBHlTlsXbN1JDk70V0o2VHI5h8r1Vc5X7T5fmxTHSA8olfrjcnXX_RkPKDfkarp7zd4lkuk1Qg-HtK5O75-7Nw/s1024/Rail%20Station%20Modernisation.jpg",
    },
    {
      heading: "4th Largest Railway Network In The World",
      para: "Covering over 68,000 kilometers, the Indian Railways stands as the world's fourth-largest railway network, surpassed only by the US, China, and Russia. Presently, it boasts over 45,000 kilometers of electrified rail tracks and stands as the most extensive government-operated rail route globally.",
      imagelink: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/02/25/Pictures/ghaziabad-overloaded-ghaziabad-incidences-hindustan-stretch-station_e9f929f6-db70-11e5-8f04-fd2ff5cc0eae.JPG",
    },
    
    {
      heading: "Luxurious Rides Like Maharaja",
      para: "Indian Railways boasts five luxurious trains: Royal Rajasthan on Wheels, Palace on Wheels, The Golden Chariot, The Maharajas’ Express, and The Deccan Odyssey. Among them, the Palace on Wheels stands as the oldest. However, these opulent journeys come with a hefty price tag.",
      imagelink: "https://breathedreamgo.com/wp-content/uploads/2017/05/Maharaja-AA-800-7.jpg",
    },
    {
      heading: "Short And Long Routes Network",
      para: "Vivek Express offers the longest train ride, spanning 4,189 kilometers from Kanyakumari to Dibrugarh, with 56 stops over 82 hours and 30 minutes. Conversely, the shortest train ride can be enjoyed from Nagpur to Ajni, covering a mere 3 kilometers.",
      imagelink: "https://cdn.zeebiz.com/sites/default/files/2024/01/27/277921-train-1-pti.jpg?im=FitAndFill=(1200,900)",
    },
    
    {
      heading: "Diamond Crossing: Trains Go to East, West, North and South",
      para: "Nagpur boasts a notable diamond crossing, where two railway tracks intersect to form a square-like shape, allowing trains to travel in the cardinal directions.",
      imagelink: "https://images.tv9telugu.com/wp-content/uploads/2021/11/diamond-crossing-of-railway.jpg",
    },
    {
      heading: "World’s Highest Rail Bridge",
      para: "Indian Railways is constructing the world's highest rail arch bridge over the Chenab river, connecting Bakkal and Kauri in the Reasi district of Jammu and Kashmir, soaring at an elevation of 1,178 feet.",
      imagelink: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/08/16113452/cheab-bridge-1.jpg",
    },
    {
      heading: "Largest Employer in the Country",
      para: "With approximately 1.4 million employees, Indian Railways stands as one of the world's largest employers. Beyond direct employment, numerous individuals earn a livelihood through railway-related activities, including station vendors and e-catering services.",
      imagelink: "https://nr.indianrailways.gov.in//uploads/images/1698664447456-WhatsApp%20Image%202023-10-30%20at%2016.37.16_489d4c9e.jpg",
    },
    {
      heading: "2 Different Stations at the Same Location",
      para: "In Ahmednagar, Srirampur and Belapur stations are situated at the same location but on opposite sides of the tracks.",
      imagelink: "https://qph.cf2.quoracdn.net/main-qimg-c4fb746448590dc7ba5afefa9d1d2897-lq",
    },
    {
      heading: "Maximum Number Are From Mathura Junction",
      para: "Mathura Junction stands out as one of India's crucial railway stations, boasting religious significance and serving as a hub for various city connections. It witnesses the emergence of seven railway lines, the highest from a single location.",
      imagelink: "https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/3/5/7/974357/0/photo0362.jpg",
    },
    {
      heading: "94% Of Railway’s Earnings Spent For Ensuring Smooth Functionality",
      para: "Indian Railways allocates 94% of its earnings towards operating trains and ensuring smooth functionality, leaving minimal room for savings, posing a significant concern for the Railway Ministry.",
      imagelink: "https://c.ndtvimg.com/2022-06/pec7cqno_trains-650_625x300_20_June_22.jpg",
    },
    {
      heading: "Pir Pranjal: The Longest Rail Tunnel",
      para: "Pir Pranjal, nestled in the Pir Pranjal range of the middle Himalayas in Jammu Kashmir, stretches 11.25 kilometers and forms part of the Jammu-Baramulla railway line.",
      imagelink: "https://blog.trainman.in/static/blog/images/longest-tunnel-blog1-low-res.jpg",
    },
    {
      heading: "Howrah Junction: Busiest Railway Station",
      para: "Boasting 23 platforms, Howrah Junction stands as Indian Railways' busiest station, serving over a million passengers daily and holding the distinction of being the oldest railway station in India.",
      imagelink: "https://i.ytimg.com/vi/wNz6lDMxOxI/maxresdefault.jpg",
    },
    {
      heading: "110 Volts Electricity in Train Coaches",
      para: "Railway coaches feature electrical appliances operating at 110 volts, distinct from the standard 220 volts in households. This setup deters theft and ensures the durability of bulbs and fans.",
      imagelink: "https://i.ytimg.com/vi/sabQwhZN_pM/maxresdefault.jpg",
    },
    {
      heading: "Resonance Frequency of the Suspension of Train Coaches Tweaked for Human Body",
      para: "Rail coaches are designed with suspension resonance frequencies around 1.2 Hz or 72 bpm to align with the human body's frequency, facilitating comfortable travel and sleep for passengers.",
      imagelink: "https://i.ytimg.com/vi/pD2okauDE6o/maxresdefault.jpg",
    },
    {
      heading: "Oldest Working Indian Locomotive Still in Use",
      para:"The Fairy Queen, India's oldest working locomotive, continues to operate with a steam engine, ferrying tourists between Delhi and Alwar. Built in 1885 and retired in 1909, the Fairy Queen was relaunched in 1997 and currently travels at 40 km/h.",
      imagelink: "https://thumbs.dreamstime.com/b/india-old-steam-train-4806310.jpg",
    }
  ];
  











  return (
    <>
      <Navbar />
      <div className="pt-5 pb-5 ">
        <main>
          <article>
            <div className="max-w-[1100px] mx-auto p-3 rounded-lg  opacity-90" >

              <h1 className="text-4xl font-bold mt-5 p-5">Some Facts About Indian Trains</h1>

              <p className="p-5">Indian trains form the lifeline of the nation, weaving through its vast and diverse landscape with unmatched efficiency and charm. As one of the largest railway networks in the world, India boasts a rich tapestry of train travel, offering passengers a kaleidoscope of experiences, from bustling city commutes to leisurely journeys through picturesque countryside. With a history spanning over a century, Indian trains have evolved into a symbol of cultural unity, connecting people from different walks of life and carrying stories of adventure, romance, and discovery along their iron tracks. From the iconic steam engines of yesteryears to the high-speed marvels of modern technology, Indian trains embody the spirit of progress and innovation, making them an integral part of the country&apos;s identity and heritage.</p>

              {data.map((item, index) => (
                <div key={index} className="p-5">
                  <h2 className="text-2xl font-bold mb-2">{index+1}. {item.heading}</h2>
                  <p className="mb-5">{item.para}</p>
                  <img src={item.imagelink} className="md:max-w-[600px]" alt="Some description" />
                </div>
              ))}
              <p className="p-5">Reference - <a href="https://www.railmitra.com/blog/20-amazing-facts-about-india-railways" className="text-[blue]">Railmitra</a> </p>
            </div>



          </article>
        </main>
      </div>

      <Footer />

    </>
  );
}


export default FactsAboutTrain;