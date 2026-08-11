import { useMemo } from "react";
import QRCode from "react-qr-code";
import TitleHeader from "../components/TitleHeader";
import { asset } from "../utils/asset";

const resumePdfPath = asset("pdf/Zohre_Pourfarzam_Resume.pdf");

const contactLinks = [
  {
    label: "Email",
    value: "zohrefarzam@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=zohrefarzam@gmail.com",
    external: true,
  },
  {
    label: "Phone",
    value: "+98 902 199 9724",
    href: "tel:+989021999724",
  },
  {
    label: "GitHub",
    value: "github.com/zohrefarzam",
    href: "https://github.com/zohrefarzam",
    external: true,
  },
];

const Contact = () => {
  const resumeUrl = useMemo(
    () =>
      typeof window !== "undefined"
        ? `${window.location.origin}${resumePdfPath}`
        : resumePdfPath,
    []
  );

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="grid-12-cols mt-16 items-stretch">
          <div className="xl:col-span-6 min-h-[32rem]">
            <div className="card-border rounded-3xl p-8 md:p-10 h-full flex flex-col justify-center gap-8">
              <p className="text-white-50 md:text-xl">
                Prefer to reach out directly? Click below to email or call me.
              </p>
              <ul className="flex flex-col gap-8">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <p className="text-sm uppercase tracking-widest text-blue-50 mb-2">
                      {link.label}
                    </p>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group inline-flex items-center gap-3 text-xl md:text-2xl font-semibold text-white transition-colors hover:text-white-50"
                    >
                      <span className="relative break-all">
                        {link.value}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                      </span>
                      <img
                        src={asset("images/arrow-down.svg")}
                        alt=""
                        className="size-5 shrink-0 -rotate-90 opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-2 pt-8 border-t border-black-50 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <QRCode
                    value={resumeUrl}
                    size={128}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="M"
                    title="Scan to download resume"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm uppercase tracking-widest text-blue-50">
                    Resume
                  </p>
                  <p className="text-white-50 text-base md:text-lg max-w-xs">
                    Scan the QR code with your phone to download my resume PDF.
                  </p>
                  <a
                    href={resumePdfPath}
                    download="Zohre_Pourfarzam_Resume.pdf"
                    className="group inline-flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-white-50 w-fit"
                  >
                    <span className="relative">
                      Download PDF
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                    <img
                      src={asset("images/arrow-down.svg")}
                      alt=""
                      className="size-5 shrink-0 opacity-60 transition-transform duration-300 group-hover:translate-y-1 group-hover:opacity-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-6 min-h-[32rem]">
            <div className="bg-[#ea6db3] w-full h-full rounded-3xl overflow-hidden flex-center">
              <img
                src={asset("images/zohre.png")}
                alt="Zohre Pourfarzam"
                className="max-h-[420px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
