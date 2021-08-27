import Avatar from 'react-avatar'
import av from './icons/rbcrf.jpg'
import tlg from './icons/images.png'
import inst from './icons/inst.jpg'
import serf from './icons/serf.png'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Дарья Фурсенко</h1>
        <div className="links">
          <a href="https://t.me/akali999">
            <Avatar src={tlg} size="35" round={true} />
          </a>
          <a href="https://www.instagram.com/f.daria.al/">
            <Avatar src={inst} size="35" round={true} />
          </a>
        </div>
      </nav>
      <div className="content">
        <div className="bio-details">
          <article className="avatar">
            <Avatar src={av} round={true} />
          </article>
          <article>
            <h2>Основыне данные</h2>
            <p>Менеджер Блогеров</p>
            <p>Город проживания:</p>
            <p>Владивосток (UTC +10)</p>
            <p>Телефон:</p>
            <p>+7-914-711-45-77</p>
            <p>Email:</p>
            <p>fursenkodd99@icloud.com</p>
          </article>
        </div>
        <div className="blog-preview">
          <article>
            <h2>Навыки:</h2>
            <p>Закупка рекламы</p>
            <p>Продажа рекламы</p>
            <p>Разбор директа</p>
            <p>Создание и ведение PR-аккаунта</p>
          </article>
        </div>
        <div className="blog-preview">
          <article>
            <h2>С кем сотрудничаю на данный момент:</h2>
            <p>Instagramm:</p>
            <a href="https://www.instagram.com/dikiy_vadik/">
              <p>@dikiy_vadik</p>
            </a>
            <a href="https://www.instagram.com/veydi_rush/">
              <p>@veydi_rush</p>
            </a>
            <a href="https://instagram.com/yuliavi_">
              <p>@yuliavi_</p>
            </a>
            <br />
            <p>TikTok</p>
            <a href="https://vm.tiktok.com/ZSJcYn4xW/">
              <p>@veydi_rush</p>
            </a>
            <a href="https://vm.tiktok.com/ZSJcYvgwp/">
              <p>@vadim_rush</p>
            </a>
            <a href="https://vm.tiktok.com/ZSJcYtKfj/">
              <p>@vadik_20cm</p>
            </a>
            <a href="https://vm.tiktok.com/ZSJcYg6PF/">
              <p>@liavi_</p>
            </a>
          </article>
        </div>
        <div className="blog-preview">
          <article>
            <img className="serfImg" src={serf} />
          </article>
        </div>
      </div>
    </div>
  )
}

export default App
