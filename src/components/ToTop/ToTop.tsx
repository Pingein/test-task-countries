import styles from "./ToTop.module.scss";

const ToTop = () => {
    return (
        <div
            className={`container ${styles.toTop}`}
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        >
            ▲
        </div>
    );
};

export default ToTop;
