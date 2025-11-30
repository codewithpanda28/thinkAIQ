import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const JourneySelector = () => {
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const journeyTypes = [
    {
      id: 'explorer',
      title: 'The Curious Explorer',
      subtitle: 'Discovery Phase',
      description:
        'I’m exploring how AI can make my business smarter, faster, and more efficient.',
      icon: 'Search',
      color: 'from-blue-500 to-indigo-600',
      path: [
        'Learn the Basics of AI Automation',
        'Explore Real Business Case Studies',
        'Access Free Learning Resources',
        'Join Our AI Insights Newsletter',
      ],
      nextAction: () => navigate('/learn'),
    },
    {
      id: 'seeker',
      title: 'The Solution Seeker',
      subtitle: 'Evaluation Phase',
      description:
        'I already understand the potential of automation and want to discover solutions tailored to my needs.',
      icon: 'Target',
      color: 'from-purple-500 to-pink-600',
      path: [
        'Explore AI Automation Services',
        'Watch Live Demo Previews',
        'Build a Custom Automation Plan',
        'Book a Free Consultation',
      ],
      nextAction: () => navigate('/solutions'),
    },
    {
      id: 'decision-maker',
      title: 'The Action Taker',
      subtitle: 'Implementation Phase',
      description:
        'I’m ready to automate key parts of my business and want to start a project with expert support.',
      icon: 'Zap',
      color: 'from-orange-500 to-red-600',
      path: [
        'Talk to an Automation Expert',
        'View Implementation Roadmap',
        'Request an Immediate Consultation',
        'Start Your AI Project Today',
      ],
      nextAction: () => navigate('/contact'),
    },
  ];
  

  const quizQuestions = [
    {
      question: "What\'s the one thing that wastes your time every week?",
      options: [
        { text: "Manual work eating up my day", journey: 'seeker' },
        { text: "Curious — want to learn if AI helps us", journey: 'explorer' },
        { text: "Need to scale now — can’t wait", journey: 'decision-maker' },
        { text: "Competitors moving faster", journey: 'decision-maker' }
      ]
    },
    {
      question: "When do you plan to start implementing AI solutions?",
      options: [
        { text: "Just exploring options right now", journey: 'explorer' },
        { text: "Within 3–6 months", journey: 'seeker' },
        { text: "As soon as possible", journey: 'decision-maker' },
        { text: "Need to see ROI first", journey: 'seeker' }
      ]
    },
    {
      question: "What best describes your current experience with automation?",
      options: [
        { text: "Just getting started", journey: 'explorer' },
        { text: "Using a few basic tools", journey: 'seeker' },
        { text: "Ready for advanced AI solutions", journey: 'decision-maker' },
        { text: "Looking to optimize existing systems", journey: 'seeker' }
      ]
    }
  ];

  const handleQuizAnswer = (journey) => {
    const journeyCount = { explorer: 0, seeker: 0, 'decision-maker': 0 };
    journeyCount[journey]++;
    
    if (currentStep < quizQuestions?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Determine recommended journey based on answers
      const recommendedJourney = Object.keys(journeyCount)?.reduce((a, b) => 
        journeyCount?.[a] > journeyCount?.[b] ? a : b
      );
      setSelectedJourney(recommendedJourney);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedJourney(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Route" size={16} />
            <span>Personalized Journey</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          A simple, human approach to{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI — one step at a time
            </span>
          </h2>
          
          <p className="text-md text-muted-foreground max-w-3xl mx-auto">
          We don’t sell buzzwords. We work with teams, learn your daily problems, and build small, useful automations that actually make life easier. Think of us as a teammate who hates repetitive tasks as much as you do.
          </p>
        </div>

        {!selectedJourney ? (
          <div className="max-w-4xl mx-auto">
            {/* Quiz Interface */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-brand-lg mb-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Quick Assessment</h3>
                  <span className="text-sm text-muted-foreground">
                    {currentStep + 1} of {quizQuestions?.length}
                  </span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2 mb-6">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / quizQuestions?.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-medium text-foreground mb-6">
                  {quizQuestions?.[currentStep]?.question}
                </h4>
                
                <div className="grid gap-4">
                  {quizQuestions?.[currentStep]?.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(option?.journey)}
                      className="text-left p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border-2 border-muted-foreground rounded-full group-hover:border-primary transition-colors duration-200"></div>
                        <span className="text-foreground group-hover:text-primary transition-colors duration-200">
                          {option?.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Journey Type Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {journeyTypes?.map((journey) => (
                <div
                  key={journey?.id}
                  className="bg-card border border-border rounded-2xl p-6 shadow-brand-lg hover:shadow-brand-md transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedJourney(journey?.id)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${journey?.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={journey?.icon} size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{journey?.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{journey?.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{journey?.description}</p>
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary">
                    Choose This Path
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Selected Journey Display */
          (<div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-brand-lg">
              {(() => {
                const journey = journeyTypes?.find(j => j?.id === selectedJourney);
                return (
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${journey?.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <Icon name={journey?.icon} size={36} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{journey?.title}</h3>
                    <p className="text-primary font-medium mb-4">{journey?.subtitle}</p>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{journey?.description}</p>
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Your Recommended Path:</h4>
                      <div className="flex flex-wrap justify-center gap-4">
                        {journey?.path?.map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                              {index + 1}. {step}
                            </div>
                            {index < journey?.path?.length - 1 && (
                              <Icon name="ArrowRight" size={16} className="text-muted-foreground mx-2" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        variant="default" 
                        size="lg"
                        onClick={journey?.nextAction}
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="premium-button"
                      >
                        Start Your Journey
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={resetQuiz}
                        iconName="RotateCcw"
                        iconPosition="left"
                      >
                        Retake Assessment
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>)
        )}
      </div>
    </section>
  );
};

export default JourneySelector;