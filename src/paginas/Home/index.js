import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

import './style.css'

const Home = () => (
    <div>
        <Topo />

        <main>
            <section className='secao-banner'>
                <div className='texto-banner'>
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </section>

            <section className='secao-sabores'>
                <img src={process.env.PUBLIC_URL + 'assets/banner-sabores.jpg'} alt='bolas de sorvete de varias cores' />

                <div className='descricao-secao'>
                    <h2 className='subtitulo'>nossos sabores</h2>
                    <span>Novos e deliciosos!</span>
                    <p>
                        sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao memsmo tempo!
                    </p>
                </div>

            </section>

            <section className='secao-eventos'>
                <div className='descricao-secao'>
                    <h2 className='subtitulo'>nossos eventos</h2>
                    <span>Delicias com sorvete!</span>
                    <p>
                        Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + 'assets/eventos-imagem.jpg'} alt='mesa decorada' />
            </section>

            <section className='secao-sobre'>
                <img src={process.env.PUBLIC_URL + 'assets/sobre-imagem.jpg'} alt='quatro amigos tomando sorvete' />
                <div className='descricao-secao'>
                    <h2 className='subtitulo'>sobre nós</h2>
                    <span>Alegria em cada casquinha!</span>
                    <p>
                        Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                    </p>
                </div>
            </section>

            <Rodape />
        </main>
    </div>
);

export default Home;