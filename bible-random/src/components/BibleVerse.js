import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from '../ui/card';
import styles from './BibleVerse.module.css';

const bibleVerses = [
  "빌립보서 4:13 - 내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라",
  "욥기 23:10 - 그러나 내가 가는 길을 그가 아시나니 그가 나를 단련하신 후에는 내가 순금 같이 되어 나오리라",
  "시편 77:1 - 내가 내 음성으로 하나님께 부르짖으리니 내 음성으로 하나님께 부르짖으면 내게 귀를 기울리시로다",
  "예레미야 29:12 - 너희가 내게 부르짖으며 매게 와서 기도하면 내가 너희들의 기도를 들을 것이요",
  "예례미야 33:3 - 너는 내게 부르짖으라 내가 네게 응답하겠고 네가 알지 못하는 크고 은밀한 일을 네게 보이리라  ",
  "고린도전서 16:14 - 너희 모든 일을 사랑으로 행하라",
  "디모데전서 4:5 - 하나님의 말씀과 기도로 거룩하여짐이라",
  "요한 일서 4:19 - 우리가 사랑하는 것은 하나님께서 먼저 우리를 사랑하셨기 때문입니다",
  "마태복음 7:7 - 구하라, 그리하면 너희에게 주실 것이요. 찾으라, 그리하면 찾아낼 것이요. 문을 두드리라, 그리하면 너희에게 열릴 것이니.",
  "빌립보서 4:6 - 아무것도 염려하지 말고, 모든 일에 기도와 간구로 너희를 구할 것을 감사함으로 하나님께 아뢰라.",
  "야고보서 5:16 - 그러므로 너희 죄를 서로 고백하며 병이 낫기를 위하여 서로 기도하라 의인의 간구는 역사하는 힘이 큼이니라",
  "요한복음 14:13 - 너희가 내 이름으로 무엇을 구하든지 내가 행하리니, 이는 아버지로 하여금 아들안에서 영광을 받으시게 하려 함이라"
];

const getRandomVerse = () => {
  return bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
};

export default function BibleVerse() {
  const [verse, setVerse] = useState(getRandomVerse);
  const [showVerse, setShowVerse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVerse(false);
      setTimeout(() => {
        setVerse(getRandomVerse());
        setShowVerse(true);
      }, 2000); // 애니메이션 지속시간 후 변경
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const parts = verse.split(" - ").map(part => part.trim());
  const author = parts[0]; // 저자
  const content = parts.slice(1); // 본문

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <AnimatePresence mode="wait">
            {showVerse && (
              <motion.div
                key={verse}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 1.5 } }}
              >
                {/* 저자 애니메이션 추가 */}
                <motion.p
                  initial={{ opacity: 0, rotateX: 180, y: 50 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 1.5, delay: 0.2 }
                  }}
                  transition={{ duration: 2, delay: 0.2 }}
                  className={styles.authorText}
                >
                  {author}
                </motion.p>

                {/* 본문 애니메이션 */}
                {content.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, rotateX: 180, y: 50 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      transition: { duration: 1.5, delay: index * 0.3 }
                    }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                    className={styles.text}
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}