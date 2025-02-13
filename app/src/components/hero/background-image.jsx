export const BackgroundImage = () => {
    return (
        <div
            className="bg-image top-0 left-0 z-0"
            style={{
                backgroundImage: "url('/hero.jpg')",
                height: "100vh",
                width: "100vw",
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflowX: "hidden",
            }}
        />
    );
};
