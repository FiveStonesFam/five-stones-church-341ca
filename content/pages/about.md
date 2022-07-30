---
title: About
layout: PageLayout
sections:
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-0
          - pb-4
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
  - type: TextSection
    colors: colors-d
    variant: variant-a
    title: Why Chattanooga?
    text: >
      So, why Chattanooga? Since 2010 Chattanooga has outpaced almost every
      other county in Tennessee to become the second-fastest-growing big city in
      the state. That growth is visible throughout downtown and surrounding
      communities. A simple drive anywhere in the city and you’ll see cranes,
      road construction, and "coming soon" signs scattered everywhere you go.
      Chattanooga has grown and will continue to grow and we think that's a good
      thing.


      For years Chattanooga has actually been considered one of the most
      religious cities in America. But religion was never what Jesus had on His
      heart for us. Jesus didn’t intend for His church to be a “members-only
      club” where only the super holy people who had it all together could
      attend.


      We see Five Stones Church as a different kind of church. We are a family
      of people where no one is perfect but everyone is welcome. We want to see
      people set free from the shame of their past and baggage of religion.
      Where instead of finding rules and regulations you will find authentic
      community. Instead of a list of do’s and dont's, you will discover your
      purpose and begin truly making a difference in the lives of others.
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-32
          - pb-56
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - elementId: ''
    colors: colors-b
    quote: >
      "We are a family of people where no one is perfect but everyone is
      welcome."
    backgroundImage:
      type: BackgroundImage
      url: /images/bg.webp
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 70
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-96
          - pb-10
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
      title:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
    type: QuoteSection
  - elementId: ''
    variant: variant-c
    colors: colors-c
    title: Our Team
    subtitle: >-
      We’re a group of proffesional fisherman & friends, who love exploring the
      seas and sharing our experiences with the world.
    people:
      - content/data/team/hilary-ouse.json
      - content/data/team/dianne-ameter.json
      - content/data/team/desmond-eagle.json
      - content/data/team/hugh-saturation.json
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-72
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPeopleSection
  - type: ContactSection
    colors: colors-d
    title: Join the Launch Team
    text: >
      We will notify you every time a shipment is heading to your neighborhood,
      and you could immediatly let us know if you want in or not
    form:
      type: FormBlock
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: full
          type: TextFormControl
      submitLabel: Submit form
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-4
          - pb-4
          - pl-4
          - pr-4
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
addTitleSuffix: true
---
