import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import {
  Aside,
  Columns,
  Figure,
  IssueHeader,
  IssueSection,
  IssueToc,
  PhotoMosaic,
  Prose,
  type TocItem,
} from "@/components/newsletter/IssueParts";
import {
  apprentices,
  chipFacts,
  issue,
  leadership,
  members,
  octoberSchedule,
  photos,
  roadmap,
  type Roster,
} from "@/data/newsletters/2026-09";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: `${issue.title} (Issue ${issue.number})`,
  description: issue.summary,
  openGraph: {
    title: `${issue.title}: Longhorn Silicon Monthly, ${issue.month}`,
    description: issue.summary,
    url: `/newsletter/${issue.slug}`,
    type: "article",
    images: [{ url: issue.cover.src }],
  },
};

const toc: TocItem[] = [
  { id: "editors-note", label: "Our first month" },
  { id: "reef", label: "Reef at a glance" },
  { id: "members", label: "Members" },
  { id: "photos", label: "September in photos" },
  { id: "architecture", label: "Architecture", group: "01" },
  { id: "rtl", label: "RTL", group: "02" },
  { id: "dv", label: "Design Verification", group: "03" },
  { id: "pd", label: "Physical Design", group: "04" },
  { id: "inference", label: "Inference", group: "05" },
  { id: "contact", label: "Get in touch" },
];

function RosterGrid({ rosters }: { rosters: Roster[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
      {rosters.map((r) => (
        <div key={r.team}>
          <h4 className="font-display text-ink mb-2.5 text-[16px] font-semibold tracking-[-0.01em]">
            {r.team}
          </h4>
          <ul className="text-ink space-y-1 text-[15px] leading-snug">
            {r.members.map((m) => (
              <li
                key={m.name}
                className="flex flex-wrap items-baseline gap-x-1.5"
              >
                <span className={m.lead ? "font-medium" : undefined}>
                  {m.name}
                </span>
                {m.lead ? (
                  <span className="text-accent text-[11px] font-semibold tracking-[0.04em] uppercase">
                    Lead
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function SeptemberIssuePage() {
  return (
    <article className="bg-bg px-6 pt-14 pb-24 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-[1200px]">
        <IssueHeader
          issue={issue}
          standfirst={
            <p>
              Hi everyone, welcome to the first Longhorn Silicon newsletter.
              We&rsquo;re building Reef, our student-designed chip based on
              Google&rsquo;s Coral NPU, and this issue covers what our teams
              worked on in September.
            </p>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_200px]">
          <div className="lg:order-2 lg:row-span-2">
            <IssueToc items={toc} />
          </div>

          <div className="min-w-0 space-y-16 md:space-y-20 lg:order-1">
            {/* ---- Editors' note ---- */}
            <section id="editors-note" className="scroll-mt-24 md:scroll-mt-28">
              <Figure photo={photos.cohort} priority className="mb-10" />
              <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-[minmax(0,1fr)_280px]">
                <Prose>
                  <p>
                    We received about 340 applications for our first cohort.
                    Since then, we&rsquo;ve started general meetings and Sunday
                    workdays in EER, co-hosted Etched on campus, and selected
                    TinyStories 28M as Reef&rsquo;s first workload. Architecture
                    and DV have also met with engineers from Tenstorrent and
                    Amazon to work through their plans.
                  </p>
                  <p>
                    Each team wrote its own update on their progress, what
                    they&rsquo;re learning, and what comes next. We&rsquo;ve
                    included the current chip specs and project timeline in{" "}
                    <a href="#reef">Reef at a glance</a>. Some decisions are
                    still open, and we&rsquo;ll keep updating those as the teams
                    test their assumptions.
                  </p>
                  <p>
                    In October so far, we&rsquo;ve had an engineer from IBM join
                    a general meeting to discuss logic design. We also scheduled
                    a hardware tech talk with Hudson River Trading for October
                    14. Thank you to everyone who&rsquo;s been showing up,
                    asking questions, and helping us get the project started.
                  </p>
                </Prose>
                <Aside title="October schedule" className="self-start">
                  <ul className="space-y-2.5 text-[15px] leading-snug">
                    {octoberSchedule.map((e) => (
                      <li key={e.date + e.what}>
                        <span className="text-ink block font-medium">
                          {e.date}
                        </span>
                        <span className="text-ink-muted">{e.what}</span>
                      </li>
                    ))}
                  </ul>
                </Aside>
              </div>
            </section>

            {/* ---- Reef at a glance ---- */}
            <IssueSection
              id="reef"
              kicker="The project"
              title="Reef at a glance"
            >
              <Prose className="mb-10">
                <p>
                  Reef is our custom version of Google&rsquo;s Coral NPU, tuned
                  for running small LLMs. It runs TinyStories 28M using GPT-Neo
                  weights quantized to int8. Lambda (N16) is planned for the
                  spring.
                </p>
              </Prose>

              <div className="grid grid-cols-1 gap-x-12 gap-y-12 xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                <div>
                  <h3 className="font-display text-ink mb-4 text-[21px] font-semibold tracking-[-0.015em]">
                    The chip
                  </h3>
                  <dl className="border-border border-t">
                    {chipFacts.map((f) => (
                      <div
                        key={f.label}
                        className="border-border grid grid-cols-[120px_minmax(0,1fr)] gap-x-4 border-b py-3 text-[15px] leading-snug"
                      >
                        <dt className="text-ink-muted">{f.label}</dt>
                        <dd className="text-ink">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="text-ink-muted mt-3 text-[13px] italic">
                    The compute plan is still a proposal until Arch spec v1 is
                    done.
                  </p>

                  <Prose className="mt-10">
                    <h3>Optimizations under study</h3>
                    <ul>
                      <li>
                        <strong>OliVe:</strong> store weights in 4-bit with
                        8-bit outliers, then expand them to 8-bit once
                        they&rsquo;re loaded
                      </li>
                      <li>Lookup tables for softmax, GELU, and layer norm</li>
                      <li>
                        <strong>
                          Vocabulary pruning or low-rank factorization
                        </strong>
                        , since most of the weights are in the embedding table
                      </li>
                      <li>
                        <strong>KV cache:</strong> cap the context length first,
                        then try quantization-aware compression
                      </li>
                    </ul>

                    <h3>Netlist releases</h3>
                    <p>
                      Each netlist gets tagged as a release in the reef
                      repository. Once it&rsquo;s out, DV runs regressions
                      against it and PD takes it through the flow.
                    </p>
                    <ul>
                      <li>
                        <strong>NL (Nov 25):</strong> a stable baseline with
                        synthesis and timing assumptions
                      </li>
                      <li>
                        <strong>PFNL (January):</strong> the real design, with
                        Arch spec v2 implemented
                      </li>
                      <li>
                        <strong>FNL (March):</strong> frozen RTL, ready for
                        signoff
                      </li>
                    </ul>
                  </Prose>
                </div>

                <div>
                  <h3 className="font-display text-ink mb-4 text-[21px] font-semibold tracking-[-0.015em]">
                    Road to tapeout
                  </h3>
                  <ol className="border-border list-none border-t">
                    {roadmap.map((m) => (
                      <li
                        key={m.date + m.title}
                        className="border-border grid grid-cols-[72px_minmax(0,1fr)] gap-x-4 border-b py-3.5 text-[15px] leading-snug sm:grid-cols-[72px_minmax(0,1fr)_112px]"
                      >
                        <span
                          className={cn(
                            "font-mono text-[12px] tracking-[0.02em] uppercase",
                            m.netlist ? "text-accent" : "text-ink-muted",
                          )}
                        >
                          {m.date}
                        </span>
                        <span className="min-w-0">
                          <span
                            className={cn(
                              "text-ink block font-medium",
                              m.netlist && "text-accent",
                            )}
                          >
                            {m.title}
                            {m.done ? (
                              <span className="text-ink-muted ml-2 text-[12px] font-normal">
                                Done
                              </span>
                            ) : null}
                          </span>
                          <span className="text-ink-muted block">
                            {m.detail}
                          </span>
                        </span>
                        <span className="text-ink-muted col-start-2 mt-1 text-[12px] tracking-[0.02em] uppercase sm:col-start-3 sm:mt-0 sm:text-right">
                          {m.owners}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="text-ink-muted mt-3 text-[13px] italic">
                    PFNL and FNL are month targets for 2027, and leads will set
                    exact dates by Arch spec v2. All foundry dates are
                    estimates.
                  </p>
                </div>
              </div>
            </IssueSection>

            {/* ---- Members ---- */}
            <IssueSection id="members" title="Members">
              <p className="text-ink mb-10 text-[15px]">
                <span className="text-ink-muted mr-2">Leadership</span>
                {leadership.map((n, i) => (
                  <Fragment key={n}>
                    {i > 0 ? ", " : null}
                    <span className="font-medium">{n}</span>
                  </Fragment>
                ))}
              </p>
              <RosterGrid rosters={members} />
              <h3 className="font-display text-ink mt-14 mb-6 text-[21px] font-semibold tracking-[-0.015em]">
                Apprentices
              </h3>
              <RosterGrid rosters={apprentices} />
            </IssueSection>

            {/* ---- Photos ---- */}
            <IssueSection
              id="photos"
              kicker="Around the org"
              title="September meetings and workdays"
            >
              <PhotoMosaic photos={issue.photos} />
            </IssueSection>

            {/* ---- Team 01: Architecture ---- */}
            <IssueSection
              id="architecture"
              kicker="Team 01"
              title="Architecture"
              leads={["Sahil Gandhi", "Justin Garrigus"]}
            >
              <Figure photo={photos.architecture} className="mb-10" />
              <Prose className="mb-10">
                <p>
                  Welcome to the beginning of the new semester! We&rsquo;re
                  ramping up activity right from the start, and busy meeting the
                  demand the rest of the organization requires. Let&rsquo;s jump
                  into it!
                </p>
              </Prose>
              <Columns>
                <Prose>
                  <h3>What is architecture?</h3>
                  <p>
                    Future AI accelerators begin with an idea. For example, we
                    may suggest hardware improvements on top of existing
                    architectures like adding a vector engine, putting more area
                    into matrix-multiply units, or switching out an
                    outer-product matrix-multiplier with a systolic array. We
                    may also suggest entirely new kinds of computers, like those
                    which completely replace matrix-multipliers with adders (for
                    the benefit of binary neural networks) or those which are
                    capable of overlaying an LLM&rsquo;s SoftMax operation with
                    its preceding GEMM (in FlashAttention).
                  </p>
                  <p>
                    While these ideas may be theoretically sound, RTL is
                    expensive to write. We do not want to develop and verify RTL
                    for ideas that end up not being worth the effort. Thus,
                    there are several questions which must be answered before
                    any RTL is written:
                  </p>
                  <ol>
                    <li>
                      <strong>How good is the idea?</strong> (And what metrics
                      define what &ldquo;good&rdquo; means?)
                    </li>
                    <li>
                      <strong>Is the idea better than the alternatives?</strong>{" "}
                      (And what even are the alternatives?)
                    </li>
                    <li>
                      <strong>Is the idea practical to implement?</strong> (An
                      excellent idea giving 100x speedup may be impossible to
                      develop in practice!)
                    </li>
                  </ol>
                  <p>
                    Regardless of how nice the idea sounds, it will not become
                    more than an idea unless each question has an answer&hellip;
                    but how do we get an answer? This is where the architecture
                    team comes into play!
                  </p>
                  <h3>Models</h3>
                  <p>
                    Techniques impacting model accuracy can be developed without
                    knowing what the hardware will look like; we explore these
                    by creating evaluation environments in PyTorch, varying
                    things like quantization degrees, layer counts, and
                    attention width, and scoring the responses the LLMs
                    generate. Currently, this is handled in Longhorn
                    Silicon&rsquo;s Inference team.
                  </p>
                  <p>
                    However, most of our efforts will be in judging hardware
                    techniques. Once we know the LLM architecture, our goal is
                    to determine which hardware configuration runs it with the
                    highest efficiency. We do this by constructing a performance
                    model, one which is capable of varying micro-architectural
                    qualities, like the core clock rate, the number of
                    matrix-multiply units, the memory bandwidth, and many more,
                    and running wide sweeps across different LLM inputs and
                    environments.
                  </p>
                  <p>
                    Doing this instills confidence in our proposed techniques
                    (much more confidence than we would garner with just an idea
                    written in prose), and helps the RTL team implement the
                    hardware with the assurance that their efforts will not be
                    wasted on an inefficient design.
                  </p>
                </Prose>
                <Prose>
                  <h3>Accuracy</h3>
                  <p>
                    Although, a constant concern of ours will be in ensuring our
                    created models are accurate. After all, a model which
                    suggests an architectural change is beneficial when it
                    really has significant hidden costs will be just as useful
                    as no model at all. To fix this (especially given our
                    extremely-short deadlines), our efforts are focused on
                    emphasizing trends just as much as absolute latency
                    predictions. A trend will generally show how one variable
                    depends on a set of others (for example, whether increasing
                    the size of a systolic array actually improves compute
                    throughput, given a set of parameters estimating the memory
                    bandwidth, execution-unit latency, and more) without
                    necessarily requiring each parameter be accurate. If the
                    trends hold true for any reasonable parameter, then we can
                    take the trend as fact without needing to have confidence in
                    the values of the parameters themselves.
                  </p>
                  <p>
                    This allows us to design performance models that are highly
                    modular, internally consistent on the module level, and
                    still useful even in highly uncertain environments. Our
                    group is capitalizing on this by assigning each member
                    ownership on a particular module in the performance model,
                    leading to rapid, risk-aware development!
                  </p>
                  <h3>Goals</h3>
                  <p>
                    Architecture is one of the most fast-paced teams in the
                    group right now. In order for RTL, DV, and PD to actually
                    make the hardware, they need to know what to make! This
                    means our first goal is to design the v0 spec: our initial
                    proposal to the rest of the club on what we believe the
                    hardware will look like. Next month, we&rsquo;ll share our
                    open-source v0 spec and jump forwards into creating our
                    performance model. See you then!
                  </p>
                </Prose>
              </Columns>
            </IssueSection>

            {/* ---- Team 02: RTL ---- */}
            <IssueSection
              id="rtl"
              kicker="Team 02"
              title="RTL"
              leads={["Peter DiSanto", "Aaron Chien"]}
            >
              <Figure photo={photos.rtlWorkday} className="mb-10" />
              <Columns>
                <Prose>
                  <h3>Highlights</h3>
                  <p>
                    September was about understanding the existing Google Coral
                    NPU design and preparing the tools and workflows needed to
                    turn Reef&rsquo;s Architecture specifications into
                    synthesizable RTL. This early work is helping us establish a
                    consistent foundation for implementing and evaluating future
                    design changes.
                  </p>
                  <ul>
                    <li>
                      <strong>Coral NPU RTL flow:</strong> Tracing module
                      hierarchy, interfaces, build dependencies, and synthesis
                      boundaries to understand the path from source RTL to
                      implementation.
                    </li>
                    <li>
                      <strong>HLS vs. Chisel:</strong> Comparing productivity
                      and abstraction with hardware control, generated-RTL
                      transparency, verification effort, and ASIC-flow
                      integration.
                    </li>
                    <li>
                      <strong>SRAM case study:</strong> Exploring
                      OpenRAM-generated SRAM macros and behavioral models to
                      establish early memory functionality and physical-cost
                      baselines.
                    </li>
                    <li>
                      <strong>Block-level synthesis:</strong> Working toward
                      repeatable synthesis of individual modules to assess
                      resource usage, timing behavior, and potential
                      bottlenecks.
                    </li>
                  </ul>
                  <h3>Project update</h3>
                  <p>
                    Our priority is building a dependable RTL-to-synthesis
                    foundation ahead of the Architecture handoff and V1
                    Specification. By mapping the baseline Coral design,
                    studying memory implementation, and establishing block-level
                    synthesis workflows now, we aim to make incoming
                    architectural changes easier to implement and evaluate. This
                    preparation will also help RTL provide timely area and
                    timing feedback to Architecture and Physical Design as Reef
                    progresses toward its first netlist.
                  </p>
                  <p>
                    Establishing repeatable synthesis baselines will also make
                    it easier to compare design revisions, identify potential
                    implementation challenges early, and coordinate changes
                    across teams as the specification evolves.
                  </p>
                </Prose>
                <div className="space-y-10">
                  <Prose>
                    <h3>What&rsquo;s next</h3>
                    <ul>
                      <li>
                        <strong>October:</strong> Prepare for module
                        initialization (Oct 16), the ISA and microarchitecture
                        freeze (Oct 20), and Architecture Spec v1 (Nov 1). These
                        milestones will guide the team&rsquo;s initial RTL
                        implementation work.
                      </li>
                      <li>
                        <strong>November timing feedback:</strong> Begin the
                        RTL&ndash;PD timing feedback loop (Nov 14), using
                        synthesis results to identify timing and area concerns
                        as design blocks take shape.
                      </li>
                      <li>
                        <strong>First netlist release:</strong> Work toward the
                        first tagged netlist release (Nov 25), supporting smoke
                        regressions and initial power, performance, and area
                        estimates for DV and PD.
                      </li>
                    </ul>
                  </Prose>
                  <Figure photo={photos.rtl} />
                </div>
              </Columns>
            </IssueSection>

            {/* ---- Team 03: DV ---- */}
            <IssueSection
              id="dv"
              kicker="Team 03"
              title="Design Verification"
              leads={["Arsh Guntakal", "Jianxiong Li"]}
            >
              <Figure photo={photos.dv} className="mb-10" />
              <Columns>
                <Prose>
                  <h3>Highlights</h3>
                  <p>
                    September was primarily focused on preparing for verifying
                    Reef, our custom NPU based on Google&rsquo;s Coral design.
                    While the Architecture team worked on defining the initial
                    subsystem specifications and the RTL team established the
                    foundation for hardware implementation, our DV team
                    collaborated closely with both teams and focused on
                    establishing a verification plan to ensure the chip produces
                    expected functional behavior with reliability.
                  </p>
                  <ul>
                    <li>
                      <strong>Understanding the Coral NPU architecture:</strong>{" "}
                      Analyzing the baseline Google Coral architecture, hardware
                      interfaces, and datapath and control path to identify key
                      functionality and potential verification challenges.
                    </li>
                    <li>
                      <strong>Verification planning:</strong> Defining how to
                      verify features in inference arithmetic and computation,
                      memory operations, and controllers.
                    </li>
                    <li>
                      <strong>Verification infrastructure:</strong> Developing a
                      reusable simulation and regression environment that can
                      support IP-level and subsystem-level testing as Reef
                      evolves and scales up.
                    </li>
                  </ul>
                  <h3>Project update</h3>
                  <p>
                    Our priority this month is to understand the Coral and Reef
                    architectures while consolidating our fundamentals in UVM/SV
                    basics, in-order and out-of-order processor architectures,
                    programming and algorithms, and Verilog RTL.
                  </p>
                  <p>
                    Rather than waiting until the design is complete, we aim to
                    develop verification alongside the Architecture and RTL
                    teams so that features and corner cases can be identified
                    early.
                  </p>
                  <p>
                    As the architecture becomes more stable, we plan to verify
                    from bottom to top. We will begin with individual IP blocks.
                    When functional coverage reaches milestones, we will scale
                    the verification up so that it will be helpful for
                    debugging. We will expand from module tests to end-to-end
                    verification, making sure computation, memory, and
                    controller work together correctly.
                  </p>
                </Prose>
                <div className="space-y-10">
                  <Prose>
                    <h3>What&rsquo;s next</h3>
                    <ul>
                      <li>
                        <strong>
                          October, architecture and specifications:
                        </strong>{" "}
                        Study the developing architecture and module specs,
                        identify important verification requirements, and
                        prepare for initial testbench development.
                      </li>
                      <li>
                        <strong>
                          November, verification plan and UVM architecture:
                        </strong>{" "}
                        Draft the verification plan, define testbench
                        architecture, and establish functional coverage goals
                        for individual IP blocks.
                      </li>
                      <li>
                        <strong>Toward tapeout:</strong> Develop UVM components,
                        design directed and constraint random tests, debug RTL
                        issues, and run regression tests on tagged releases.
                        Gradually improve functional coverage, achieve coverage
                        closure, and work toward functional signoff before
                        tapeout.
                      </li>
                    </ul>
                  </Prose>
                  <Figure photo={photos.recap} caption="September recap." />
                </div>
              </Columns>
            </IssueSection>

            {/* ---- Team 04: PD ---- */}
            <IssueSection
              id="pd"
              kicker="Team 04"
              title="Physical Design"
              leads={["Nathan Mara"]}
            >
              <Figure photo={photos.pd} className="mb-10" />
              <Columns>
                <Prose>
                  <h3>Who we are</h3>
                  <p>
                    Each of our physical design (PD) apprentices owns one block
                    of the Longhorn Silicon Neural Processing Unit (NPU), and
                    they&rsquo;re taking it all the way to tapeout, when the
                    finished design gets sent to the factory. To get ready,
                    they&rsquo;re doing a couple of weeks of training based on a
                    graduate ASIC design course at UT Austin. Our PD flow is
                    being built in the Cadence design suite, the same tools
                    professional chip designers use.
                  </p>
                  <h3>What is physical design</h3>
                  <p>
                    The RTL team writes a chip&rsquo;s logic as code. The
                    factory needs something else: the exact shapes of every
                    transistor and wire. Physical design gets you from one to
                    the other. We decide how big the block is, place the cells,
                    wire them up, and then check that the result works.
                  </p>
                  <p>
                    A whole chip is too big to lay out in one go, so it&rsquo;s
                    split into blocks that are built separately and joined at
                    the end, and each apprentice gets one. Along the way you
                    pick up algorithms, circuits, computer architecture, and
                    even some materials science and thermodynamics, since heat
                    is a real problem on a dense chip.
                  </p>
                  <h3>Getting to tapeout</h3>
                  <p>
                    There are ten steps that take a design from RTL to tapeout:
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 text-[15px]">
                    <div>
                      <p className="text-ink-muted mb-2 text-[12px] tracking-[0.04em] uppercase">
                        Build
                      </p>
                      <ol className="space-y-1.5">
                        <li>
                          <strong>Synthesis</strong> code to gates
                        </li>
                        <li>
                          <strong>Floorplan</strong> size and power
                        </li>
                        <li>
                          <strong>Placement</strong> place std cells
                        </li>
                        <li>
                          <strong>Clock tree</strong> clock every cell
                        </li>
                        <li>
                          <strong>Routing</strong> draw the wires
                        </li>
                      </ol>
                    </div>
                    <div>
                      <p className="text-ink-muted mb-2 text-[12px] tracking-[0.04em] uppercase">
                        Check
                      </p>
                      <ol start={6} className="space-y-1.5">
                        <li>
                          <strong>Extraction</strong> measure wires
                        </li>
                        <li>
                          <strong>Timing</strong> check setup &amp; hold
                        </li>
                        <li>
                          <strong>Power</strong> check power use
                        </li>
                        <li>
                          <strong>DRC</strong> manufacturability
                        </li>
                        <li>
                          <strong>LVS</strong> check connections
                        </li>
                      </ol>
                    </div>
                  </div>
                  <p>
                    A design is done only when every check passes on the same
                    layout. A timing fix can move cells and break a power check
                    somewhere else, so you rerun everything.
                  </p>
                </Prose>
                <Prose>
                  <h3>Trade-offs in the design</h3>
                  <p>
                    Every choice in PD trades off power, performance and area
                    (PPA). Faster chips burn more power and take up more room,
                    and saving power usually costs area. You can&rsquo;t win all
                    three, so you pick where to optimize.
                  </p>
                  <table className="w-full border-collapse text-left text-[14px] leading-snug">
                    <thead>
                      <tr className="border-border text-ink-muted border-b text-[12px] tracking-[0.04em] uppercase">
                        <th className="py-2 pr-3 font-medium">Trade-off</th>
                        <th className="py-2 pr-3 font-medium">What happens</th>
                        <th className="py-2 font-medium">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Speed vs power",
                          "Power goes up with clock speed, and the fastest cells leak the most when idle.",
                          "Fast cells and upsized cells are more leaky and consume more power.",
                        ],
                        [
                          "Speed vs area",
                          "Hitting a speed target means adding buffers and bigger gates.",
                          "Larger cells and extra buffers take more space.",
                        ],
                        [
                          "Power vs area",
                          "Shutting parts of the chip off, or running them at a lower voltage, takes extra cells.",
                          "Clock gating and power gating consume extra area.",
                        ],
                      ].map(([a, b, c]) => (
                        <tr
                          key={a}
                          className="border-border border-b align-top"
                        >
                          <td className="py-2.5 pr-3 font-medium whitespace-nowrap">
                            {a}
                          </td>
                          <td className="py-2.5 pr-3">{b}</td>
                          <td className="py-2.5">{c}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p>
                    PPA isn&rsquo;t the whole list either. Wires have to carry
                    current for years without wearing out, and transistors slow
                    down as they age, so we build in margin. A bigger chip fits
                    fewer times on a wafer, which drives up cost and reduces
                    yield. And one pass through routing and the final checks can
                    take hours to days, so every redo eats into the schedule.
                  </p>
                  <h3>What&rsquo;s next</h3>
                  <p>
                    First we&rsquo;ll finish the intro training. Then we start
                    building a real PD flow, using Google&rsquo;s Coral NPU as a
                    test case. The goal is a fleshed-out flow we can reuse as a
                    template once the RTL team hands us our own design. Along
                    the way we&rsquo;ll compare Coral&rsquo;s early estimates
                    against our targets and feed what we learn back to the
                    architecture and RTL teams, so problems show up before the
                    design is locked in.
                  </p>
                </Prose>
              </Columns>
            </IssueSection>

            {/* ---- Team 05: Inference ---- */}
            <IssueSection
              id="inference"
              kicker="Team 05"
              title="Inference"
              leads={["Shrey Birmiwal"]}
            >
              <Figure photo={photos.inference} className="mb-10" />
              <Prose className="mb-10">
                <p>
                  Howdy! We&rsquo;re excited to share what we do and what
                  we&rsquo;re working on.
                </p>
              </Prose>
              <Columns>
                <Prose>
                  <h3>What is inference?</h3>
                  <p>
                    When you talk to Gemini or ChatGPT or Claude, it&rsquo;s
                    running a program on hardware to convert user prompts into
                    tokens and finally into output text. When Large Language
                    Models (LLMs) first started becoming popular, inference was
                    a second thought, as improving models was far more important
                    than making them run efficiently. Now, as models are getting
                    larger (10T params or more!), hardware getting increasingly
                    more expensive (companies spending $100B for datacenters!),
                    and margins shrinking, running models on hardware
                    efficiently is more important than ever. In the real world,
                    inference involves designing systems with complicated
                    hardware (for example, multi node distributed GPUs) and
                    writing efficient kernels that can utilize your hardware
                    most optimally. Every incremental improvement in hardware
                    utilization can save billions of dollars, and that&rsquo;s
                    exactly why frontier labs pay huge sums of money to kernel
                    engineers!
                  </p>
                  <h3>
                    What&rsquo;s the inference team at Longhorn Silicon about?
                  </h3>
                  <p>
                    Currently, even while using the best hardware and the best
                    software, it is very hard to reach the theoretical limit of
                    the hardware. This is because the software and the hardware
                    were not fully codesigned together.
                  </p>
                  <p>
                    Longhorn Silicon believes in radical codesign. The inference
                    team works closely with the hardware teams to provide
                    feedback on what hardware systems can be designed
                    differently for us to have more efficient hardware for LLM
                    serving. Additionally, we work with the hardware teams to
                    utilize the hardware we have to push performance.
                  </p>
                </Prose>
                <Prose>
                  <h3>What are we working on?</h3>
                  <p>
                    <strong>Model efficiency.</strong> The goal of this group is
                    to take existing large language models and make them more
                    efficient for our hardware. By trying tricks such as KV
                    re-ranking, low-rank factorization, speculative decoding,
                    vocab size reduction, and more, we hope to push the frontier
                    of model quality per unit of efficiency. In our initial
                    experimentations on simulators, we foresee the Reef chip to
                    have memory bandwidth as the primary bottleneck, which has
                    led us to explore running 24M parameter GPT-Neo flavored
                    models fine tuned on the TinyStories dataset. Additionally,
                    we are looking into mixed precision quantization, RoPE
                    instead of table lookup, and vocabulary size reduction to
                    reduce the memory footprint of this model to push the
                    &ldquo;intelligence per byte&rdquo; frontier.
                  </p>
                  <p>
                    <strong>Kernels.</strong> The kernel group is aiming to
                    utilize the hardware to the maximum amount possible. This
                    involves writing the best kernels, building systems to
                    perform tensor parallelism (running models across multiple
                    chips!), pipeline parallelism, etc. Additionally, as we add
                    more custom hardware instructions, this team will be
                    building a compiler that can compile programs to efficiently
                    utilize the hardware.
                  </p>
                  <p>
                    <strong>Profiling.</strong> This group works closely with
                    architecture to codesign the hardware with the LLM workload
                    in mind. This group will run various model workloads and
                    profile the hardware utilization and try to find gaps or
                    hardware improvements that can be built for our chips.
                  </p>
                  <p>
                    Thanks for reading and see you next month! Hook &rsquo;Em!
                  </p>
                </Prose>
              </Columns>
            </IssueSection>

            {/* ---- Closing ---- */}
            <IssueSection
              id="contact"
              kicker="Get in touch"
              title="Thanks for reading"
            >
              <Prose>
                <p>
                  We&rsquo;re looking for engineers who can review our work,
                  speak at a meeting, or mentor our members, and partners who
                  can help support the tapeout. If you&rsquo;re interested in
                  working with us or want to hear more about Reef, email us.
                </p>
              </Prose>
              <ul className="mt-8 space-y-1.5 text-[17px]">
                <li>
                  <a
                    href={`mailto:${SITE.contactEmail}`}
                    className="text-accent font-semibold underline-offset-4 hover:underline"
                  >
                    {SITE.contactEmail}
                  </a>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-ink underline-offset-4 hover:underline"
                  >
                    longhornsilicon.com
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/LonghornSilicon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline-offset-4 hover:underline"
                  >
                    github.com/LonghornSilicon
                  </a>
                </li>
              </ul>
              <p className="text-ink-muted mt-12 text-[14px]">
                Prefer the print layout?{" "}
                <a
                  href={issue.pdf}
                  download
                  className="text-ink underline decoration-[1.5px] underline-offset-4"
                >
                  Download this issue as a PDF
                </a>
                , or browse{" "}
                <Link
                  href="/newsletter"
                  className="text-ink underline decoration-[1.5px] underline-offset-4"
                >
                  all issues
                </Link>
                .
              </p>
            </IssueSection>
          </div>
        </div>
      </div>
    </article>
  );
}
