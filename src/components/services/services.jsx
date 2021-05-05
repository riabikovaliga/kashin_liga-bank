import React, {useState} from "react";
import {Carousel} from "react-responsive-carousel";
import {ReactComponent as IconVault} from "../../assets/img/icon-vault.svg";
import {ReactComponent as IconCards} from "../../assets/img/icon-cards.svg";
import {ReactComponent as IconSecurity} from "../../assets/img/icon-security.svg";
import {ReactComponent as IconPhone} from "../../assets/img/icon-phone.svg";
import DepositService from "../deposit-service/deposit-service";
import CreditService from "../credit-service/credit-service";
import InsuranceService from "../insurance-service/insurance-service";
import OnlineService from "../online-service/online-service";
import TabItem from "../tab-item/tab-item";
import SliderButtonItem from "../slider-button-item/slider-button-item";
import {Tab} from "../../const";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TABS = {
  [Tab.DEPOSITS]: {
    title: `Вклады`,
    type: Tab.DEPOSITS,
    component: DepositService,
    icon: IconVault,
  },
  [Tab.CREDITS]: {
    title: `Кредиты`,
    type: Tab.CREDITS,
    component: CreditService,
    icon: IconCards,
  },
  [Tab.INSURANCE]: {
    title: `Страхование`,
    type: Tab.INSURANCE,
    component: InsuranceService,
    icon: IconSecurity,
  },
  [Tab.ONLINE_SERVICES]: {
    title: `Онлайн сервисы`,
    type: Tab.ONLINE_SERVICES,
    component: OnlineService,
    icon: IconPhone,
  },
};

const TABS_LIST = Object.values(TABS);

const ServicesTabMap = {};
TABS_LIST.forEach((tab, i) => {
  ServicesTabMap[tab.type] = i;
});

const Services = () => {
  const [currentTab, setCurrentTab] = useState(Tab.DEPOSITS);

  const onTabClick = (evt) => {
    const tabType = evt.currentTarget.dataset.tabType;

    setCurrentTab(tabType);
  };

  const onSlideChange = (index) => {
    const tabType = TABS_LIST[index].type;
    setCurrentTab(tabType);
  };

  return (
    <section className="page-content__services services">
      <h2 className="visually-hidden">Услуги</h2>

      <ul className="services__tabs tabs">
        {TABS_LIST.map((tab, i) => (
          <TabItem
            key={`service-tab-${i}`}
            type={tab.type}
            IconComponent={tab.icon}
            isActive={currentTab === tab.type}
            title={tab.title}
            onTabClick={onTabClick}
          />
        ))}
      </ul>

      <Carousel
        className="services__buttons-list slider-buttons slider-buttons--services"
        selectedItem={ServicesTabMap[currentTab]}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        stopOnHover={false}
        autoPlay={false}
        dynamicHeight
        onChange={onSlideChange}
        renderIndicator={(onClickHandler, isSelected, index) => (
          <SliderButtonItem
            onClickHandler={onClickHandler}
            isSelected={isSelected}
            index={index}
          />
        )}
      >
        {TABS_LIST.map((tab, i) => (
          <tab.component key={`tab-content-${i}`}/>
        ))}
      </Carousel>
    </section>
  );
};

export default Services;
