import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss'
import {AppRouter} from "app/providers/router";

const App = () => {
    const { theme, handleSwitchTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={handleSwitchTheme}>Свет</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <AppRouter />
        </div>
    )
}

export default App
