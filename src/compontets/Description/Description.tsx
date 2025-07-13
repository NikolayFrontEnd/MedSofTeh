import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./Description.module.css"
import photo from "../../assets/График.png"
import photo2 from '../../assets/trafalgar-illustration sec03 1.png';
import photo3 from '../../assets/AIreport.jpeg';
import photo4 from '../../assets/p1.jpeg';
import photo5 from '../../assets/p5.jpeg';

const Description = forwardRef<HTMLDivElement>((_props, ref) => {
  const [visibleBlocks, setVisibleBlocks] = useState<Set<number>>(new Set());
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleBlocks(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    blockRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setBlockRef = (index: number) => (el: HTMLDivElement | null) => {
    blockRefs.current[index] = el;
  };

  const getBlockClassName = (index: number) => {
    return `${styles.descriptionBlockAbout} ${visibleBlocks.has(index) ? styles.visible : ''}`;
  };

  return (
    <div> 
      <div className={styles.mainText} ref={ref}>
        <div className={styles.quastion}>Что дает наше приложение?</div>
        <div className={styles.line}></div>
        <div className={styles.descriptionWords}>
          Далее мы подробно расскажем обо всех преимуществах и удобствах, которые наше приложение 
          предлагает частным клиникам — от автоматизации рутинных задач до повышения качества 
          обслуживания пациентов и оптимизации внутренних процессов.
        </div>
      </div>

      <div 
        ref={setBlockRef(0)} 
        data-index="0" 
        className={getBlockClassName(0)}
        style={{ transitionDelay: '0s' }}
      >
        <div><img src={photo} alt="Цифровой документооборот" /></div>
        <div className={styles.rightBlock}>
          <div className={styles.improveWords}>Цифровой документооборот</div>
          <div className={styles.line}></div>
          <div className={styles.descWords}>
            Храните историю болезни каждого пациента в единой системе. Забудьте о бумажных картах и 
            потерянных документах — всё доступно онлайн в любое время.
          </div>
        </div>
      </div>

      <div 
        ref={setBlockRef(1)} 
        data-index="1" 
        className={getBlockClassName(1)}
        style={{ transitionDelay: '0.1s' }}
      >
        <div className={styles.rightBlock}>
          <div className={styles.improveWords}>AI-отчеты по диагнозам</div>
          <div className={styles.line}></div>
          <div className={styles.descWords}>
            Формируйте медицинские отчеты и заключения автоматически. Система поддерживает экспорт в 
            различные форматы для скачивания и печати.
          </div>
        </div>
        <div><img className={styles.photSize} src={photo3} alt="AI-отчеты" /></div>
      </div>

      <div 
        ref={setBlockRef(2)} 
        data-index="2" 
        className={getBlockClassName(2)}
        style={{ transitionDelay: '0.2s' }}
      >
        <div><img src={photo2} alt="Оптимизация регистратуры" /></div>
        <div className={styles.rightBlock}>
          <div className={styles.improveWords}>Оптимизация регистратуры</div>
          <div className={styles.line}></div>
          <div className={styles.descWords}>
            Регистраторы тратят меньше времени на рутину: запись, подтверждения и обработка документов 
            автоматизированы и доступны в онлайн формате
          </div>
        </div>
      </div>

      <div 
        ref={setBlockRef(3)} 
        data-index="3" 
        className={getBlockClassName(3)}
        style={{ transitionDelay: '0.3s' }}
      >
        <div className={styles.rightBlock}>
          <div className={styles.improveWords}>Интеллектуальная запись</div>
          <div className={styles.line}></div>
          <div className={styles.descWords}>
            Пациенты записываются через удобный интерфейс, видят свободные окна врача и выбирают 
            подходящее время. Без звонков и очередей.
          </div>
        </div>
        <div><img className={styles.photSize} src={photo4} alt="Интеллектуальная запись" /></div>
      </div>

      <div 
        ref={setBlockRef(4)} 
        data-index="4" 
        className={getBlockClassName(4)}
        style={{ transitionDelay: '0.4s' }}
      >
        <div><img src={photo} alt="Опрос перед приёмом" /></div>
        <div className={styles.rightBlock}>
          <div className={styles.improveWords}>Опрос перед приёмом</div>
          <div className={styles.line}></div>
          <div className={styles.descWords}>
            Перед визитом пациент проходит AI-анализ симптомов. Врач получает предварительные данные и 
            экономит время на первичном осмотре.
          </div>
        </div>
      </div>

      <div 
        ref={setBlockRef(5)} 
        data-index="5" 
        className={getBlockClassName(5)}
        style={{ transitionDelay: '0.5s' }}
      >
        <div className={styles.rightBlock}>
          <div className={styles.improveWords}>Полный профиль пациента</div>
          <div className={styles.line}></div>
          <div className={styles.descWords}>
            Вся история обращений, диагнозы, назначения и документы — в одном месте. Врачи получают 
            полный контекст ещё до начала приёма.
          </div>
        </div>
        <div><img src={photo5} className={styles.photSize} alt="Профиль пациента" /></div>
      </div>
    </div>
  );
});


export default Description;

