---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Join the Launch Team
sections:
  - type: TextSection
    colors: colors-d
    variant: variant-a
    title: Interested in Joining the Team?
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mb-12
        padding:
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
    subtitle: >-
      We would love to talk with you and get you involved with the Five Stones
      Family!
  - type: ContactSection
    colors: colors-d
    elementId: ''
    backgroundSize: full
    title: Contact us
    text: We look forward to hearing from you.
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: website@fivestonesfamily.com
      fields:
        - type: TextFormControl
          name: first-name
          label: First Name
          placeholder: Your first name
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: last-name
          label: Last Name
          hideLabel: false
          placeholder: Your last name
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextFormControl
          name: phone
          label: Phone Number
          placeholder: Your phone number
          isRequired: 'false'
          width: 1/2
        - type: TextareaFormControl
          name: comments
          label: Comments
          hideLabel: false
          placeholder: Anything you would like us to know?
          isRequired: false
          width: full
      submitLabel: Send Message
    media:
      type: ImageBlock
      url: /images/hero-2.png
      altText: Contact form image
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
---
