import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import smart from "./assets/smart.png";
import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import gift from "./assets/gift.png";
import cashback from "./assets/cashback.png";
import percent from "./assets/percent.png";
import free from "./assets/free.png";
import transfer from "./assets/transfer.png";
import cash from "./assets/cash.png";
import discount from "./assets/discount.png";
import family from "./assets/family.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { StatusBadge } from "@alfalab/core-components/status-badge";

interface Product {
  title: string;
  text: string;
  image: string;
}

const familyProducts: Array<Product> = [
  {
    title: "Приглашайте до 2х близких в семейную подписку",
    text: "Каждый получит все преимущества Альфа-Смарт",
    image: family,
  },
];

const products: Array<Product> = [
  {
    title: "+1 топовая категория кэшбэка",
    text: "5% на самое популярное",
    image: smileArrow,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "Секретная подборка партнёров с кэшбэком",
    text: "Доступ к специальным предложениям",
    image: gift,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях",
    image: cashback,
  },
  {
    title: "+1% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: percent,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "По России без ограничений по сумме",
    image: transfer,
  },
  {
    title: "Бесплатное снятие наличных",
    text: "В банкоматах любых банков России",
    image: cash,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [selectedPlan, setSelectedPlan] = useState("");

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={smart} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Получите доступ к привилегиям
          </Typography.Text>

          <Gap size={2} />

          <div className={appSt.selectors}>
            <div
              className={appSt.selector}
              style={{
                ...(selectedPlan === "Личная" && {
                  border: "2px solid #0cc44d",
                }),
              }}
              onClick={() => setSelectedPlan("Личная")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                }}
              >
                <Typography.Text
                  view="primary-medium"
                  color="primary"
                  weight="bold"
                >
                  Личная
                </Typography.Text>
                <Typography.Text view="primary-small" color="primary">
                  399 ₽/мес.
                </Typography.Text>
              </div>
              {selectedPlan === "Личная" ? (
                <StatusBadge view={"positive-checkmark"} size={24} />
              ) : (
                <div className={appSt.selectorBullet}></div>
              )}
            </div>
            <div
              className={appSt.selector}
              style={{
                ...(selectedPlan === "Семейная" && {
                  border: "2px solid #0cc44d",
                }),
              }}
              onClick={() => setSelectedPlan("Семейная")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Typography.Text
                    view="primary-medium"
                    color="primary"
                    weight="bold"
                  >
                    Семейная
                  </Typography.Text>
                  <Typography.Text view="primary-small" color="primary">
                    +2 участника
                  </Typography.Text>
                </div>
                <Typography.Text view="primary-small" color="primary">
                  999 ₽/мес.
                </Typography.Text>
              </div>
              {selectedPlan === "Семейная" ? (
                <StatusBadge view={"positive-checkmark"} size={24} />
              ) : (
                <div className={appSt.selectorBullet}></div>
              )}
            </div>
          </div>
        </div>

        {selectedPlan === "Семейная" && (
          <>
            <Gap size={32} />

            <div className={appSt.products}>
              <Typography.TitleResponsive
                font="system"
                tag="h2"
                weight="bold"
                view="small"
                className={appSt.productsTitle}
              >
                Семейный доступ
              </Typography.TitleResponsive>

              {familyProducts.map((product) => (
                <div className={appSt.product} key={product.title}>
                  <div>
                    <Typography.TitleResponsive
                      font="system"
                      view="small"
                      weight="bold"
                      tag="h3"
                      className={appSt.productTitle}
                    >
                      {product.title}
                    </Typography.TitleResponsive>

                    <Typography.Text
                      view="secondary-large"
                      tag="p"
                      color="secondary"
                      className={appSt.productText}
                    >
                      {product.text}
                    </Typography.Text>
                  </div>
                  <img
                    src={product.image}
                    alt=""
                    width={96}
                    height={96}
                    className={appSt.productIcon}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            В вашей подписке
          </Typography.TitleResponsive>

          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                width={96}
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          loading={loading}
          onClick={submit}
          disabled={!selectedPlan}
        >
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
