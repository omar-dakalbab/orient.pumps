import React, { useEffect, useState } from 'react'
import "./styl.css";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import { Link } from "react-router-dom";
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";

export default function App() {
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get(`${import.meta.env.VITE_API}/req/getProducts.php`)
            .then(response => {
                setData(response.data)

            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="App">
            <VerticalScrollView>
                {new Array(1).fill().map((_, i) => {
                    return (
                        <HorizontalScrollView className="row" key={i}>
                            {data.slice(0, 8).map((val, key) => {
                                return (
                                    <div key={key}>
                                        {
                                            new Array(1).fill().map((_, j) => {
                                                const text = `${i + 1},${j + 1}`;
                                                return (
                                                    <div key={j} style={{ margin: 50, cursor: 'pointer' }}>
                                                        <Link to={`/product/${val.id}`}>
                                                            <div className="product">
                                                                <LazyLoadImage src={"/uploads/" + val.images} alt="product-img" />
                                                                <p>{i18n.language === "en" ? val.product_title : i18n.language === "ar" ? val.title_ar : val.title_tr}</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                )
                            })}
                        </HorizontalScrollView>
                    );
                })}
            </VerticalScrollView>
        </div>
    );
}

function HorizontalScrollView(props) {
    const ref = React.useRef();
    const isDragging = React.useRef(false);
    const [{ x }, set, stop] = useSpring(() => ({ x: 0 }));
    const bind = useGesture(
        {
            onDrag({ down, movement: [x], first, last, vxvy: [vx] }) {
                if (first) isDragging.current = true;
                if (last) setTimeout(() => (isDragging.current = false), 0);
                set({ x: -x, immediate: down });
            },
            onClickCapture(ev) {
                if (isDragging.current) {
                    ev.stopPropagation();
                }
            },
            onWheelStart() {
                // Stop any user-land scroll animation from confcliting with the browser
                stop();
            }
        },
        {
            drag: {
                axis: "x",
                filterTaps: true,
                initial() {
                    return [-ref.current.scrollLeft, 0];
                }
            }
        }
    );

    return (
        <animated.div
            ref={ref}
            scrollLeft={x}
            className={props.className}
            {...bind()}
        >
            {props.children}
        </animated.div>
    );
}

function VerticalScrollView(props) {
    const ref = React.useRef();
    const isDragging = React.useRef(false);
    const [{ y }, set, stop] = useSpring(() => ({ y: 0 }));
    const bind = useGesture(
        {
            onDrag({ down, movement: [, y], first, last }) {
                if (first) isDragging.current = true;
                if (last) setTimeout(() => (isDragging.current = false), 0);
                set({ y: -y, immediate: down });
            },
            onClickCapture(ev) {
                if (isDragging.current) {
                    ev.stopPropagation();
                }
            },
            onWheelStart() {
                // Stop any user-land scroll animation from confcliting with the browser
                stop();
            }
        },
        {
            drag: {
                axis: "y",
                filterTaps: true,
                initial() {
                    return [0, -ref.current.scrollTop];
                }
            }
        }
    );

    return (
        <animated.div
            ref={ref}
            scrollTop={y}
            className={props.className}
            {...bind()}
        >
            {props.children}
        </animated.div>
    );
}
