import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Jala Eaton",
            "title": "Median household wealth for Black Americans is projected to hit $0 by 2053. My estate plan is designed to protect me from that.",
            "description": "An estate-planning attorney shares details behind the process and where some people's plans might fall short.",
            "url": "https://www.businessinsider.com/estate-plan-designed-make-sure-wealth-build-lasts-2024-6",
            "urlToImage": "https://i.insider.com/6661d5eecc442a2f676e9667?width=1200&format=jpeg",
            "publishedAt": "2024-06-07T17:34:13Z",
            "content": "The offers and details on this page may have updated or changed since the time of publication. See our article on Business Insider for current information.Getty Images; Jala Eaton; BI\r\n<ul>\n<li>I'm w… [+5025 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Ana Altchek",
            "title": "Tesla's $450 lightning-shaped bottle of mezcal is its most expensive liquor yet",
            "description": "Tesla's latest liquor offering isn't cheap. After taxes, Tesla Mezcal comes out to about $498.",
            "url": "https://www.businessinsider.com/tesla-mezcal-bottle-for-sale-2024-6",
            "urlToImage": "https://i.insider.com/666325ead0b8e1c832cd0da9?width=1200&format=jpeg",
            "publishedAt": "2024-06-07T17:29:38Z",
            "content": "Tesla launched its most expensive liquor yet.Michael M. Santiago/Getty\r\n<ul><li>Tesla launched a $450 lightning-shaped bottle of mezcal, its priciest alcohol yet.</li><li>The hand-blown bottle, inspi… [+2024 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Brian-Damien Morgan",
            "title": "Folium, the new emulator on the block, tempts fate with pricing options",
            "description": "Folium is a new Nintendo 3DS emulator that allows iOS owners to play classic titles on the go for a… Continue reading Folium, the new emulator on the block, tempts fate with pricing options\nThe post Folium, the new emulator on the block, tempts fate with pric…",
            "url": "https://readwrite.com/folium-the-new-emulator-on-the-block-tempts-fate-with-pricing-options/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Folium-the-new-emulator-on-the-block-tempts-fate-with-pricing-options.jpg",
            "publishedAt": "2024-06-07T16:23:08Z",
            "content": "Folium is a new Nintendo 3DS emulator that allows iOS owners to play classic titles on the go for a price.\r\nJarrod Norwell, the mastermind behind Folium, has introduced a range of pricing options for… [+1733 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Suswati Basu",
            "title": "Netflix launches major TV app redesign after ten years",
            "description": "Netflix began rolling out its first major update to its TV app in ten years, in a bid to make… Continue reading Netflix launches major TV app redesign after ten years\nThe post Netflix launches major TV app redesign after ten years appeared first on ReadWrite.",
            "url": "https://readwrite.com/netflix-tv-app-redesign/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Netflix-launches-major-TV-app-redesign-after-ten-years.png",
            "publishedAt": "2024-06-07T15:24:45Z",
            "content": "Netflix began rolling out its first major update to its TV app in ten years, in a bid to make the interface easier to use and allow users to make viewing choices much quicker.\r\nThe new interface chan… [+2261 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Gabriel Erard",
            "title": "El nombre elegido por Apple para las funciones de IA que llegarán a los iPhone, iPad y Mac",
            "description": "Estamos a solo un puñado de días del comienzo de la WWDC 2024 y todas las miradas están puestas en las funciones de inteligencia artificial que llegarán a los iPhone, iPad, Mac y demás dispositivos de Apple. Y la firma de Cupertino habría elegido un nombre ac…",
            "url": "http://hipertextual.com/2024/06/wwdc-2024-apple-intelligence",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/03/wwdc-2024-apple-scaled.jpeg",
            "publishedAt": "2024-06-07T12:48:54Z",
            "content": "Estamos a solo un puñado de días del comienzo de la WWDC 2024 y todas las miradas están puestas en las funciones de inteligencia artificial que llegarán a los iPhone, iPad, Mac y demás dispositivos d… [+3625 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Gabriel Erard",
            "title": "Netflix comienza a probar una página de inicio rediseñada",
            "description": "Una página de inicio rediseñada y simplificada está en camino a Netflix. El gigante del streaming ha comenzado a probar un importante cambio estético en su aplicación para televisores. Por lo pronto, se trata de un test limitado a un número pequeño de suscrip…",
            "url": "http://hipertextual.com/2024/06/netflix-pagina-inicio-redisenada-tv",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/06/thibault-penin-GrzoKN1aqSg-unsplash-scaled.jpg",
            "publishedAt": "2024-06-07T13:52:57Z",
            "content": "Una página de inicio rediseñada y simplificada está en camino a Netflix. El gigante del streaming ha comenzado a probar un importante cambio estético en su aplicación para televisores. Por lo pronto,… [+3004 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "Telegram lanza Stars, su propia moneda virtual para compras dentro de la app",
            "description": "Telegram tiene una nueva moneda virtual llamada Stars con la que los usuarios podrán realizar compras en las mini apps. Así lo ha anunciado Pavel Durov, máximo responsable de la plataforma, quien también ha revelado que los desarrolladores de dichas aplicacio…",
            "url": "http://hipertextual.com/2024/06/telegram-lanza-stars-su-propia-moneda-virtual-para-compras-dentro-de-la-app",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2021/05/Telegram-Logo-Blue.jpg",
            "publishedAt": "2024-06-07T09:08:28Z",
            "content": "Telegram tiene una nueva moneda virtual llamada Stars con la que los usuarios podrán realizar compras en las mini apps. Así lo ha anunciado Pavel Durov, máximo responsable de la plataforma, quien tam… [+2347 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hackaday"
            },
            "author": "Jonathan Bennett",
            "title": "This Week in Security: Recall, Modem Mysteries, and Flipping Pages",
            "description": "Microsoft is racing to get into the AI game as part of Windows 11 on ARM, calling it Copilot+. It’s an odd decision, but clearly aimed at competing with the Apple M series of MacBooks. Our fo…",
            "url": "https://hackaday.com/2024/06/07/this-week-in-security-recall-modem-mysteries-and-flipping-pages/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2016/01/darkarts.jpg",
            "publishedAt": "2024-06-07T14:00:05Z",
            "content": "Microsoft is racing to get into the AI game as part of Windows 11 on ARM, calling it Copilot+. It’s an odd decision, but clearly aimed at competing with the Apple M series of MacBooks. Our focus of i… [+8983 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jeff Lagerquist",
            "title": "Gas prices in Canada fall, with double-digit drop in Vancouver",
            "description": "According to data firm Kalibrate, the average cost per litre of regular fuel in cities nationwide fell from $1.685 to $1.633 between May 30 and June 6.",
            "url": "https://ca.finance.yahoo.com/news/gas-prices-in-canada-fall-with-double-digit-drop-in-vancouver-130913681.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8jfKzjwGvf4oThwSP3OVVQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTk-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/d3308c70-24cb-11ef-bacd-1e9f03f617fc",
            "publishedAt": "2024-06-07T13:26:55Z",
            "content": "Gas prices are falling as OPEC+ members attempt to shore up the price of oil. THE CANADIAN PRESS/Darryl Dyck (The Canadian Press)\r\nGas prices dropped an average of 5.2 cents per litre across Canada o… [+7817 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Manu García (Visnuh)",
            "title": "Ni cintas, ni llaveros, ni pañuelos: la mejor solución para recoger tu maleta cuanto antes en el aeropuerto es esta",
            "description": "Recientemente, salía a la luz la opinión de un empleado de aeropuerto, encargado de la gestión de maletas en el mismo, que nos avisaba: no es aconsejable atar cintas, gomas y otros objetos llamativos a las maletas para reconocerlas más rápido. Hay otras soluc…",
            "url": "https://www.xataka.com/seleccion/cintas-llaveros-panuelos-mejor-solucion-para-recoger-tu-maleta-cuanto-antes-aeropuerto-esta",
            "urlToImage": "https://i.blogs.es/9e10ee/aeropuerto/840_560.jpeg",
            "publishedAt": "2024-06-07T17:24:19Z",
            "content": "Recientemente, salía a la luz la opinión de un empleado de aeropuerto, encargado de la gestión de maletas en el mismo, que nos avisaba: no es aconsejable atar cintas, gomas y otros objetos llamativos… [+5171 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Rubén Andrés",
            "title": "El milagro económico de NVIDIA es valer 3 billones con 30.000 empleados, y este gráfico lo demuestra",
            "description": "La trayectoria de NVIDIA ha ido marcando hito tras hito en la historia de las empresas tecnológicas. La compañía no solo ha conseguido dominar con mano férrea las ventas de chips para inteligencia artificial, también está marcando récords en su balance de ben…",
            "url": "https://www.xataka.com/empresas-y-economia/milagro-economico-nvidia-valer-3-billones-30-000-empleados-este-grafico-demuestra",
            "urlToImage": "https://i.blogs.es/df639b/portada/840_560.jpeg",
            "publishedAt": "2024-06-07T16:02:38Z",
            "content": "La trayectoria de NVIDIA ha ido marcando hito tras hito en la historia de las empresas tecnológicas. La compañía no solo ha conseguido dominar con mano férrea las ventas de chips para inteligencia ar… [+4183 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Ricardo Aguilar",
            "title": "La interfaz más espectacular en un coche eléctrico es de Rivian. La empresa detrás de Fortnite tiene mucho que ver con ella",
            "description": "Hablar de interfaces para coches es hablar, por lo general, de interfaces bastante aburridas y muy alejadas del grado de perfección al que se acerca el UI de nuestros teléfonos. Tanto es así, que Android Auto ha evolucionado para convertirse en el sistema ope…",
            "url": "https://www.xataka.com/movilidad/interfaz-espectacular-coche-electrico-rivian-empresa-detras-fortnite-tiene-mucho-que-ver-ella",
            "urlToImage": "https://i.blogs.es/44f227/rivian/840_560.jpeg",
            "publishedAt": "2024-06-07T10:15:39Z",
            "content": "Hablar de interfaces para coches es hablar, por lo general, de interfaces bastante aburridas y muy alejadas del grado de perfección al que se acerca el UI de nuestros teléfonos. Tanto es así, que And… [+2742 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Herrera Castro",
            "title": "Smart TVs, teléfonos, PCs gaming y más: el primer Cazando Gangas de junio viene cargado de ofertas irresistibles",
            "description": "Junio viene marcado por el calor y, aunque habitualmente sea un mes enfocado en aires acondicionados, ventiladores y mirar las vacaciones de verano, muchos usuarios aprovechan rebajas muy suculentas para estrenar algún producto en pleno verano. Vemos cuáles p…",
            "url": "https://www.xataka.com/seleccion/smart-tvs-telefonos-dispositivos-para-gamers-primer-cazando-gangas-junio-viene-cargado-ofertas-irresistibles",
            "urlToImage": "https://i.blogs.es/a6a6fe/plantilla-cazando-gangas-neon/840_560.jpeg",
            "publishedAt": "2024-06-07T08:29:42Z",
            "content": "Junio viene marcado por el calor y, aunque habitualmente sea un mes enfocado en aires acondicionados, ventiladores y mirar las vacaciones de verano, muchos usuarios aprovechan rebajas muy suculentas … [+7565 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "No solo es NVIDIA: las acciones de ASML se disparan en bolsa porque los chips son el nuevo petróleo",
            "description": "El crecimiento de NVIDIA en los últimos meses está siendo espectacular. La empresa superó a Apple en valoración de mercado —aunque ahora mismo ha vuelto al tercer lugar— y se colocó a un 5% de superar a Microsoft y convertirse en la más importante del mundo. …",
            "url": "https://www.xataka.com/componentes/no-solo-nvidia-acciones-asml-se-disparan-bolsa-porque-chips-nuevo-petroleo",
            "urlToImage": "https://i.blogs.es/2af811/asml1/840_560.jpeg",
            "publishedAt": "2024-06-07T13:31:41Z",
            "content": "El crecimiento de NVIDIA en los últimos meses está siendo espectacular. La empresa superó a Apple en valoración de mercado aunque ahora mismo ha vuelto al tercer lugar y se colocó a un 5% de superar … [+2520 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Alberto de la Torre",
            "title": "Renault Rafale, primeras impresiones: SUV familiar perfecto a diario y buen deportivo para el fin de semana en formato híbrido",
            "description": "Renault cierra el círculo con un nuevo SUV. Desde que Renualution se presentara, el proyecto que está renovando la marca en todo tipo de ámbitos (incluida la electrificación), los franceses han ido recogiendo todo lo que han sembrado en los últimos dos años.\n…",
            "url": "https://www.xataka.com/movilidad/renault-rafale-e-tech-full-hybrid-opiniones-primeras-impresiones-fotos",
            "urlToImage": "https://i.blogs.es/26e692/img_4982/840_560.jpeg",
            "publishedAt": "2024-06-07T09:01:38Z",
            "content": "Renault cierra el círculo con un nuevo SUV. Desde que Renualution se presentara, el proyecto que está renovando la marca en todo tipo de ámbitos (incluida la electrificación), los franceses han ido r… [+10442 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bitsplitting.org"
            },
            "author": "John Gruber",
            "title": "‘Apple Intelligence’",
            "description": "As WWDC draws near, anticipation of Apple's long-rumored VR headset is high. The company is widely expected to announce an impressive, albeit expensive new product at the June 5 Keynote event. In short: people expect Apple to make a strong showing in this fie…",
            "url": "https://bitsplitting.org/2023/05/25/apple-intelligence/",
            "urlToImage": "https://bitsplitting.org/wp-content/uploads/2018/10/bs-artwork-14001-2.png",
            "publishedAt": "2024-06-07T19:25:32Z",
            "content": "As WWDC draws near, anticipation of Apple’s long-rumored VR headset is high. The company is widely expected to announce an impressive, albeit expensive new product at the June 5 Keynote event. In sho… [+3158 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Spyglass.org"
            },
            "author": "John Gruber",
            "title": "Nvidia Hits the $3T Market Cap Club, Passing Apple, Trailing Only Microsoft",
            "description": "NVIDIA hits $3T market cap and soars past Apple",
            "url": "https://spyglass.org/nvidia-3-trillion/",
            "urlToImage": "https://spyglass.org/content/images/size/w1200/2024/06/Screenshot-2024-06-05-at-10.09.23-PM-2.png",
            "publishedAt": "2024-06-07T02:33:48Z",
            "content": "Back in March, I wrote the following footnote in a post about NVIDIA's just-announced Blackwell chips:\r\nNVIDIA is getting dangerously close to passing Apple -- yes, Apple -- in market cap. Forget Int… [+2971 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daringfireball.net"
            },
            "author": "John Gruber",
            "title": "★ Gurman’s Epic Pre-WWDC Leak Report",
            "description": "It’s astonishing how much of what we supposedly know about Apple’s WWDC keynote announcements is entirely from Gurman. If he switched to a different beat we’d be almost entirely in dark; as it stands, he’s seemingly spoiled most of it.",
            "url": "https://daringfireball.net/2024/06/gurman_wwdc_leak_dump",
            "urlToImage": "https://daringfireball.net/graphics/df-wide-card.png",
            "publishedAt": "2024-06-07T23:06:23Z",
            "content": "More from Gurman’s Friday-before-WWDC report at Bloomberg. But before I start quoting, man, his report reads as though he’s gotten the notes from someone who’s already watched Monday’s keynote. I sor… [+5316 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mastodon.social"
            },
            "author": "John Gruber",
            "title": "1Password and Safari",
            "description": "Next week is WWDC, so it's a good time for a thread about the 1Password browser extension for Safari, its history, challenges, and the future — both what we're working on and what we'd like to see from Apple, Safari and the web platform at large. ",
            "url": "https://mastodon.social/@mitchchn/112554203713464394",
            "urlToImage": null,
            "publishedAt": "2024-06-07T00:27:08Z",
            "content": "Speaking of password management and WWDC, Mitch Cohen, product manager of 1Password, wrote a nice thread a few days ago on Mastodon:\n\n\n Next week is WWDC, so it’s a good time for a thread about the\n1… [+527 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Sabina Graves",
            "title": "Rare Mary Poppins History Comes to Life in New Disney Podcast",
            "description": "Image: D23\r\nRichard Sherman left a grand legacy behind after his recent passing; along with his brother Robert, he made the blueprints for what Disney music would become. But he left some surprises too, as we’ll soon hear on Disney: A Recorded History. Vetera…",
            "url": "https://gizmodo.com/disney-music-new-podcast-richard-sherman-rare-tapes-1851524973",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/edf9f09c4cdb399cf653df8a1ac56017.png",
            "publishedAt": "2024-06-07T14:00:00Z",
            "content": "Richard Sherman left a grand legacy behind after his recent passing; along with his brother Robert, he made the blueprints for what Disney music would become. But he left some surprises too, as well … [+1932 chars]"
        }
    ]

    // constructor is called when a new instance of the class is created
    constructor() {
        super();
        console.log("constructor is called from News component");
        this.state = {
            articles: this.articles,
            page: 1,
            pagesize: 20,
            maxPage: 10,
        };
    }

    async componentDidMount() {
        // let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d57055dba1d3424f900469ec8526dd71";

        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-06-07&to=2024-06-07&sortBy=popularity&apiKey=d57055dba1d3424f900469ec8526dd71&page=${this.state.page}&pagesize=${this.state.pagesize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles });
        // this.state = parseData.articles;

        this.setState({
            maxPage: Math.ceil(2005 / this.state.pagesize)
        });
    }

    handlePrevClick = async () => {
        console.log("previous");
        let page = this.state.page - 1
        console.log(`previous page: ${page}`);
        this.setState({
            page: page
        })
        console.log(`Page: ${this.state.page}`);


        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-06-07&to=2024-06-07&sortBy=popularity&apiKey=d57055dba1d3424f900469ec8526dd71&page=${this.state.page}&pagesize=${this.state.pagesize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles });
        // this.state = parseData.articles;

    }
    handleNextClick = async () => {
        console.log("next");
        let page = this.state.page + 1
        console.log(`next page: ${page}`);

        this.setState({
            page: page
        })
        console.log(`Page: ${this.state.page}`);


        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-06-07&to=2024-06-07&sortBy=popularity&apiKey=d57055dba1d3424f900469ec8526dd71&page=${this.state.page}&pagesize=${this.state.pagesize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles });
        // this.state = parseData.articles;
    }
    render() {
        return (
            <div className='container '>
                <h2 className='my-3'>Miss Monkey - Top Headlines</h2>

                <div className="row">
                    {
                        this.state.articles.map((element) => {
                            // console.log(element);
                            if (element.author != null && element.urlToImage != null && element.title != null && element.description != null) {
                                return (
                                    <div className="col-md-4 my-2" key={element.url}>
                                        <NewsItem
                                            title={element.title.slice(0, 45)}
                                            description={element.description.slice(0, 88)}
                                            newsUrl={element.url}
                                            imgUrl={element.urlToImage}
                                        />
                                    </div>
                                );
                            }
                            return null;
                        })
                    }

                </div>


                <div className='d-flex justify-content-between my-3'>
                    <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevClick}> &larr; Previous </button>
                        <span>Current-page: {this.state.page}</span>
                        <span>Max-page: {this.state.maxPage}</span>
                        
                    <button disabled={this.state.page >= this.state.maxPage} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
