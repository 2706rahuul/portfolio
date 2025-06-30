import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Publications</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="L3Cube-MahaSent-MD: A Multi-domain Marathi Sentiment Analysis Dataset and Transformer Models"
              description="Presenting L3Cube-MahaSent-MD, a pioneering Marathi sentiment analysis dataset with 60,000 samples across four domains. Our MahaBERT model achieves top accuracy, addressing the scarcity of multi-domain datasets in Indic sentiment analysis. Access data and models on GitHub: https://github.com/l3cube-pune/MarathiNLP. Published at DMLR workshop, ICML 2023."
              ghLink="https://dmlr.ai/assets/accepted-papers/88/CameraReady/Camera_ready_ICML2023_Dataset_Paper.pdf"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Robust Sentiment Analysis for Low Resource languages Using Data Augmentation Approaches: A Case Study in Marathi"
              description="This study addresses the lack of resources for sentiment analysis in the low-resource Marathi language. It introduces four data augmentation techniques, enhancing model performance in various scenarios, with promising results for cross-domain accuracy. The methods are applicable to other low-resource languages and general text classification tasks."
              ghLink="https://ui.adsabs.harvard.edu/abs/2023arXiv231000734P/abstract"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PICT@ DravidianLangTech-ACL2022: Neural machine translation on dravidian languages"
              description="This paper highlights our success in the Dravidian language translation task, achieving top rankings in three of five sub-tasks. We employed various models, including Seq2Seq and transformers, trained and fine-tuned for accuracy using BLEU scores. Paper published at DravidianLangTech, a workshop in collaboration with ACL 2022."
              ghLink="https://aclanthology.org/2022.dravidianlangtech-1.28/"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Evaluating Performances of Attention-Based Merge Architecture Models for Image Captioning in Indian Languages"
              description="
              This paper introduces attention-based merge architecture models for accurate image captions in four Indian languages using the Flickr8K dataset. Achieving high BLEU scores, our proposed architectures outperform others for Marathi, Kannada, Malayalam, and Tamil."
              ghLink="https://pdfs.semanticscholar.org/b1fb/7b6085b2a3d9e0d8cf01c44aec947ca5a18e.pdf"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Implementing Deep Learning-Based Approaches for Article Summarization in Indian Languages"
              description="This paper explores deep-learning approaches for summarizing news articles in low-resource Indian languages. Using ILSUM 2022 datasets, we fine-tune pre-trained seq2seq models, achieving optimal results with PEGASUS for English, IndicBART for Hindi, and a tailored PEGASUS model for Gujarati. Evaluation done with ROUGE metrics."
              ghLink="https://ceur-ws.org/Vol-3395/T6-10.pdf"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Abstractive approaches to multidocument summarization of medical literature reviews"
              description="
              This research focuses on abstractive summarization of medical documents, addressing challenges with domain-specific jargon. Using pre-trained models like BART-large and T5-base, we achieved fourth place in MSLR leaderboard evaluations on MS^2 and Cochrane datasets, validated through ROUGE scores."
              ghLink="https://aclanthology.org/2022.sdp-1.24/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Unsupervised and Very-Low Resource Supervised Translation on German and Sorbian Variant Languages"
              description="Team PICT-NLP's work, presented for the EMNLP 2022 shared task, focuses on unsupervised and low-resource supervised machine translation. We employed transformer architecture for supervised learning and Facebook's XLM for unsupervised learning, achieving noteworthy results across six language pairs. Evaluated using BLEU and chrF metrics."
              ghLink="https://aclanthology.org/2022.wmt-1.108/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Trinity at SemEval-2023 Task 12: Sentiment Analysis for Low-resource African Languages using Twitter Dataset"
              description="This research explores sentiment analysis in three African languages (Hausa, Swahili, Yoruba) using deep learning and traditional models. We applied data oversampling for imbalanced data and assessed model performance with weighted and macro F1 scores."
              ghLink="https://aclanthology.org/2023.semeval-1.161/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
