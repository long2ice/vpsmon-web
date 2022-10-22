export default function Footer({className}: { className?: string }) {
  return (
    <footer className={"footer footer-center p-4 bg-base-300 text-base-content "+className}>
      <div>
        <p>Copyright © 2022 - All right reserved by VPSMON</p>
      </div>
    </footer>
  );
}
