# What I've learned while working on this project

This is a living document for me to record what I've learned while working on this project.

## Architecture

I created architectural diagrams with [Cloudcraft](https://cloudcraft.co/) because they work well for AWS infrastructure and can be easily exported into various formats.

I feel it's sufficient to document my architecture decisions on this page, but may consider [documenting my architecture decisions](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records) with [ADR tools](https://github.com/npryce/adr-tools) based on this [post](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions). For now, I'm just keeping it simple.

While researching on whether to use Terrform or Serverless for this project, I came across this [post](https://www.serverless.com/blog/definitive-guide-terraform-serverless) that suggests that Serverless should be used for application specific infrastructure while Terraform is good for shared infrastructure.

## Cost of infrastructure

Cost is an important component when deciding between one architecture design decision over another. Since Cloudcraft offers a good cost calculator it makes it easy to compare between different designs and to quickly see the impact of adding or removing certain services to a design.

I can also simulate the impact of high traffic and plan accordingly. For instance, I had initially thought the database might have a high cost, but it turns out most of the cost came from API Gateway and Lambda while S3 and DynamoDB had negligible costs.

## Team collaboration

My team and I use an interactive whiteboard from [Miro](https://miro.com/) to collaborate on wireframes, user journeys, bot features, and milestones, among other things.

We keep track of what needs to be worked on through our [development board](https://github.com/jsstrn/subhas-music-bot/projects/1). Each card is essetially a task and is assigned labels and a milestone in order to prioritize them for the next release.

## The importance of project milestones

As a software engineer, I tend to focus on quality code and technical aspects of the project. While these are very important in any project, priority needs to be given to business value. Setting up milestones allows me to look at a card and decide whether it needs to be worked on right now or pushed to a later release.

## Picking an open source license

I knew I wanted to have an open source license for the project, but there are [numerous options available](https://choosealicense.com/licenses/). After some deliberation I settled for [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).

There's also a license field in `package.json` which uses identifiers listed in the [SPDX License List](https://spdx.org/licenses/).

## TypeScript

AWS Lambda supports Node 14 so we can set the TypeScript compiler options based on [Node Target Mapping](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping).

## Template engine

Often times we want our bot to reply with formatted text (i.e. bold, italics, paragraphs, etc.) so that it's easier to read. There's also the issue of handling variables.

One solution is to use a template engine to render HTML, but only a very small [subset of HTML tags are allowed](https://core.telegram.org/bots/api#html-style) on Telegram. This allows us to format our text for readability and plays nicely with variables.
