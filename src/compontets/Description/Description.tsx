import styles from "./Description.module.css"
import photo from "../../assets/График.png"
import photo2 from '../../assets/trafalgar-illustration sec03 1.png';
import photo3 from '../../assets/AIreport.jpeg';
import photo4 from '../../assets/p1.jpeg';
import photo5 from '../../assets/p5.jpeg';

const Description = () => {
    
    return (
        <>
        <div className = {styles.mainText}>    
        <div className = {styles.quastion}>Что дает наше приложение?</div>
        <div className = {styles.line}></div>
<div className = {styles.descriptionWords}>Далее мы подробно расскажем обо всех преимуществах и удобствах, которые наше приложение предлагает частным клиникам — от автоматизации рутинных задач до повышения качества обслуживания пациентов и оптимизации внутренних процессов.</div>
        </div>

<div className={styles.descriptionBlockAbout}>
  <div><img src={photo} /></div>
  <div className={styles.rightBlock}>     
    <div className={styles.improveWords}>Цифровой документооборот</div>
    <div className={styles.line}></div>
    <div className={styles.descWords}>
      Храните историю болезни каждого пациента в единой системе. Забудьте о бумажных картах и потерянных документах — всё доступно онлайн в любое время.
    </div>
  </div>
</div>



<div className={styles.descriptionBlockAbout}>
  <div className={styles.rightBlock}>     
    <div className={styles.improveWords}>AI-отчеты по диагнозам</div>
    <div className={styles.line}></div>
    <div className={styles.descWords}>
      Формируйте медицинские отчеты и заключения автоматически. Система поддерживает экспорт в различные форматы для скачивания и печати.
    </div>
  </div>
  <div><img className={styles.photSize} src={photo3} /></div>
</div>




<div className={styles.descriptionBlockAbout}>
  <div ><img  src={photo2} /></div>
  <div className={styles.rightBlock}>     
    <div className={styles.improveWords}>Оптимизация регистратуры</div>
    <div className={styles.line}></div>
    <div className={styles.descWords}>
      Регистраторы тратят меньше времени на рутину: запись, подтверждения и обработка документов автоматизированы и доступны в онлайн формате
    </div>
  </div>
</div>


<div className={styles.descriptionBlockAbout}>
  <div className={styles.rightBlock}>     
    <div className={styles.improveWords}>Интеллектуальная запись</div>
    <div className={styles.line}></div>
    <div className={styles.descWords}>
      Пациенты записываются через удобный интерфейс, видят свободные окна врача и выбирают подходящее время. Без звонков и очередей.
    </div>
  </div>
  <div><img className={styles.photSize} src={photo4} /></div>
</div>


<div className={styles.descriptionBlockAbout}>
  <div><img src={photo} /></div>
  <div className={styles.rightBlock}>     
    <div className={styles.improveWords}>Опрос перед приёмом</div>
    <div className={styles.line}></div>
    <div className={styles.descWords}>
      Перед визитом пациент проходит AI-анализ симптомов. Врач получает предварительные данные и экономит время на первичном осмотре.
    </div>
  </div>
</div>


<div className={styles.descriptionBlockAbout}>
  <div className={styles.rightBlock}>     
    <div className={styles.improveWords}>Полный профиль пациента</div>
    <div className={styles.line}></div>
    <div className={styles.descWords}>
      Вся история обращений, диагнозы, назначения и документы — в одном месте. Врачи получают полный контекст ещё до начала приёма.
    </div>
  </div>
  <div><img src={photo5} className={styles.photSize} /></div>
</div>

        </>
    )
}

export default Description;

