export const useToggleCardView = () => {
    const handleCardViewToggle = (setPreview, setCode, isPreview) => {
        setPreview(isPreview);
        setCode(!isPreview);
    };

    return handleCardViewToggle;
};