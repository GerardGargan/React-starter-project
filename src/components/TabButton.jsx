export default function TabButton({ children, isSelected, ...props }) {

    return (
        <li><button className={isSelected===true? 'active' : ''} {...props}>{children}</button></li>
    );
}