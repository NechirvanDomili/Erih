import './Footer.css';

export default function Footer() {
    return (
        <footer className="erih-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} ERIH Matchmaking Platform</p>
                <p>European Route of Industrial Heritage</p>
            </div>
        </footer>
    );
}
