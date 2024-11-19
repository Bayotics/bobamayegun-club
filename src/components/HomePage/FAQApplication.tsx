import FAQ from "./FAQ";
import faqOne from '@/images/members/memberX.jpg';
import faqIv from '@/images/faqiv.jpg';
import faqIII from '@/images/faqiii.jpg';
import faqII from '@/images/faqii.jpg';
import Image from "next/image";
import {Fade} from 'react-awesome-reveal';


export function HomeFaqMain () {

    const questions = [
        {
          id: 1,
          question: 'What is Bobamayegun omo Okunrin Akile Ijebu?',
          answer: 'Bobamayegun is an online community dedicated to preserving, promoting, and celebrating the rich culture, history, and heritage of the Ijebu people.',
        },
        {
          id: 2,
          question: 'Who are the Ijebu people?',
          answer: 'The Ijebu are a subgroup of the Yoruba people, primarily located in southwestern Nigeria, known for their distinctive cultural practices, entrepreneurial spirit, and historical significance in West Africa.',
        },
        {
          id: 3,
          question: 'How can I join the Bobamayegun community?',
          answer: 'To join, you can sign up on our website, where you’ll gain access to exclusive content, discussions, events, and networking opportunities related to Ijebu culture.',
        },
        {
          id: 4,
          question: 'Does Bobamayegun omo Akile Ijebu host any events?',
          answer: 'Yes! We organize various events, both online and offline, such as cultural festivals, webinars, language classes, and workshops focused on Ijebu traditions and practices.',
        },
        {
            id: 5,
            question: 'Can I contribute content to the website?',
            answer: 'Absolutely! We welcome contributions from community members, including articles, photos, videos, and personal stories related to Ijebu culture. Please contact us to submit your work.',
          },
          {
            id: 6,
            question: 'Is there a way to learn the Ijebu dialect in the community?',
            answer: 'Yes, we offer resources and tutorials for learning the Ijebu dialect, including phrases, vocabulary, and pronunciation guides.',
          },
          {
            id: 7,
            question: 'How can I support or donate to the Bobamayegun community?',
            answer: 'Donations and sponsorships help us to sustain and expand our initiatives. Visit our "Support Us" page to contribute and help us preserve Ijebu heritage.',
          },
          {
            id: 8,
            question: 'What topics are covered in the Bobamayegun forums?',
            answer: 'Our forums cover a wide range of topics, including Ijebu history, language, cuisine, folklore, fashion, and contemporary issues affecting the Ijebu community.',
          },
          {
            id: 9,
            question: 'Are there membership benefits for joining Bobamayegun?',
            answer: 'Yes! Members receive early access to events, exclusive content, and a platform to connect with a large amount of opportunities.',
          },
          {
            id: 10,
            question: 'How can I get in touch with for more information?',
            answer: 'You can reach out to us through our Contact Us page with any questions, feedback, or suggestions. We look forward to connecting with you!',
          },
      ];
    return (
        <div className="faq-main-grid">
            <div className = 'faqs-home-texts mt-20 px-40'>
              <Fade direction="down" triggerOnce>
                <p className='text-center text-black font-medium'>FAQs</p>
                  <h1 className='text-3xl text-black font-semibold text-center mt-1'>
                      Frequently Asked Questions
                  </h1>
              </Fade>
            </div>
            <div className="faq-main-contents flex mt-8">
                <div className="px-10 faq-cont-images w-[45%]">
                    <div className="fci-top flex gap-6">
                        <div className="fci-top-i w-1/2">
                            <Image src={faqIv} alt="faq"
                            className=" h-200px rounded-2xl" />
                        </div>
                        <div className="fci-top-ii w-1/2">
                            <Image src={faqIII} alt="faq"
                            className=" h-[200px] mt-24 rounded-2xl" />
                        </div>
                    </div>
                    <div className="fci-bottom flex gap-4 mt-4">
                        <div className="fci-bottom-i w-1/2 flex justify-end mr-4">
                            <Image src={faqOne} alt="faq"
                            className=" h-[250px] w-[70%] rounded-2xl" />
                        </div>
                        <div className="fci-bottom-ii w-1/2">
                            <Image src={faqII} alt="faq"
                            className=" h-[300px] w-[95%] rounded-2xl" />
                        </div>
                    </div>
                </div>
                <div className="faq-cont-questions w-[55%] ">
                  <Fade delay={100} triggerOnce>
                    <FAQ data={questions} />
                  </Fade>
                </div>
            </div>
        </div>
    )
}