import Topo from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'
import './style.css'

const Sabores = () => (
    <div>
        <Topo />

        <main>
            <section className='sabores-banner'>
                <div className='texto-banner'>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>

            <section className='limita-secao container-sabores'>
                <h2>SABORES DE SORVETE</h2>

                <div className='container-cards'>
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + 'assets/sabor-oreo.png'} alt='sorvete sabor oreo' />
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div className="card">
                        <img src={process.env.PUBLIC_URL + 'assets/sabor-pistache.png'} alt="sorvete sabor pistache" />
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>

                    <div className="card">
                        <img src={process.env.PUBLIC_URL + 'assets/sabor-cookies-avela.png'} alt="sorvete sabor cookies e avelã" />
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div className="card">
                        <img src={process.env.PUBLIC_URL + 'assets/sabor-kiwi.png'} alt="sorvete sabor kiwi" />
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div className="card">
                        <img src={process.env.PUBLIC_URL + 'assets/sabor-morango.png'} alt="sorvete sabor morango" />
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div className="card">
                        <img src={process.env.PUBLIC_URL + 'assets/sabor-limao.png'} alt="sorvete sabor limao siciliano" />
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>

            </section>
        </main>

        <Rodape />
    </div>
);

export default Sabores;