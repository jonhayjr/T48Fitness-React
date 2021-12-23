type FooterProps = {
    name: string
}

const Footer = ({name}:FooterProps) => {
    return (
       <footer className="bg-black fixed min-w-full bottom-0 left-0 flex flex-row align-center justify-center p-10">
           <p className="text-white">&copy;2021 {name}</p>
       </footer>
    )
}

export default Footer
