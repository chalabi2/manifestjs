const { join, resolve } = require('path');
const telescope = require('@cosmology/telescope').default;
const rimraf = require('rimraf').rimrafSync;

const protoDirs = [join(__dirname, '/../proto')];

const outPath = join(__dirname, '/../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    removeUnusedImports: true,
    classesUseArrowFunctions: true,

    tsDisable: {
      patterns: ['**/tx.registry.ts'],
      files: [
        'cosmos/auth/v1beta1/query.ts',
        'cosmos/authz/v1beta1/authz.ts',
        'cosmos/gov/v1/tx.ts',
        'cosmos/gov/v1beta1/gov.ts',
        'cosmos/gov/v1beta1/tx.ts'
      ]
    },

    prototypes: {
      optionalQueryParams: false,
      useOptionalNullable: true,
      fieldDefaultIsOptional: false,
      addTypeUrlToObjects: true,
      addTypeUrlToDecoders: true,
      addAminoTypeToObjects: true,
      excluded: {
        packages: [
          'ibc.applications.fee.v1',

          // 'cosmos.auth.v1beta1',
          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          // "cosmos.feegrant.v1beta1",
          'cosmos.genutil.v1beta1',
          // "cosmos.group.v1beta1",

          // 'cosmos.mint.v1beta1',

          'cosmos.autocli.v1',

          // "cosmos.group.v1",
          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.orm.v1alpha1',
          'cosmos.orm.v1',
          'cosmos.slashing.v1beta1',
          // "cosmos.vesting.v1beta1",
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ],
        hardProtos: ['cosmos/accounts/v1/accounts.proto']
      },
      parser: {
        keepCase: false
      },
      typingsFormat: {
        useDeepPartial: true,
        duration: 'duration',
        timestamp: 'date',
        useExact: true,
        autoFixUndefinedEnumDefault: true,
        num64: 'bigint',
        customTypes: {
          useCosmosSDKDecimal: true
        }
      },
      patch: {
        'cosmos/group/v1/tx.proto': [
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)': 'cosmos.bank.v1beta1.MsgSend'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'strangelove_ventures.poa.v1.MsgUpdateParams'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'strangelove_ventures.poa.v1.MsgRemoveValidator'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'strangelove_ventures.poa.v1.MsgRemovePending'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'strangelove_ventures.poa.v1.MsgUpdateStakingParams'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'strangelove_ventures.poa.v1.MsgSetPower'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)': 'manifest.v1.MsgUpdateParams'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)': 'manifest.v1.MsgPayout'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.group.v1.MsgUpdateGroupAdmin'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.group.v1.MsgUpdateGroupMembers'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.group.v1.MsgUpdateGroupMetadata'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.group.v1.MsgUpdateGroupPolicyAdmin'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.group.v1.MsgCreateGroupWithPolicy'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.group.v1.MsgSubmitProposal'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)': 'cosmos.group.v1.MsgVote'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.group.v1.MsgWithdrawProposal'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)': 'cosmos.group.v1.MsgExec'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.group.v1.MsgLeaveGroup'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.bank.v1beta1.MsgMultiSend'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.upgrade.v1beta1.MsgSoftwareUpgrade'
            }
          },
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
              '(cosmos_proto.accepts_interface)':
                'cosmos.upgrade.v1beta1.MsgCancelUpgrade'
            }
          }
        ]
      }
    },
    interfaces: {
      enabled: true,
      useUnionTypes: true
    },
    aminoEncoding: {
      enabled: true,
      useLegacyInlineEncoding: false
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      type: 'tendermint',
      enabled: true,
      camelCase: true,
      useConnectComet: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
