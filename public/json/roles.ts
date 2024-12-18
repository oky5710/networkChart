export default {
  id: "RootAccount",
  type: "Account",
  children: [
    {
      id: "Account-1",
      type: "Account",
      children: [
        {
          id: "IAMUser-1",
          type: "User",
          children: [
            {
              id: "Role-33",
              type: "Role",
              children: [
                {
                  id: "Policy-12",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-194",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-21",
              type: "Role",
              children: [
                {
                  id: "Policy-15",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-179",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-123",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-22",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-2",
          type: "User",
          children: [
            {
              id: "Role-69",
              type: "Role",
              children: [
                {
                  id: "Policy-87",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-36",
              type: "Role",
              children: [
                {
                  id: "Policy-77",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-80",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-3",
          type: "User",
          children: [
            {
              id: "Role-45",
              type: "Role",
              children: [
                {
                  id: "Policy-172",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-193",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-51",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-75",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-3",
              type: "Role",
              children: [
                {
                  id: "Policy-127",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-116",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-89",
              type: "Role",
              children: [
                {
                  id: "Policy-192",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-125",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-119",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-55",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-139",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-4",
          type: "User",
          children: [
            {
              id: "Role-22",
              type: "Role",
              children: [
                {
                  id: "Policy-88",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-54",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-156",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "Account-2",
      type: "Account",
      children: [
        {
          id: "IAMUser-5",
          type: "User",
          children: [
            {
              id: "Role-93",
              type: "Role",
              children: [
                {
                  id: "Policy-58",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-145",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-159",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-59",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-13",
              type: "Role",
              children: [
                {
                  id: "Policy-20",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-6",
          type: "User",
          children: [
            {
              id: "Role-57",
              type: "Role",
              children: [
                {
                  id: "Policy-138",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-23",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-196",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-33",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-32",
              type: "Role",
              children: [
                {
                  id: "Policy-129",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-7",
          type: "User",
          children: [
            {
              id: "Role-27",
              type: "Role",
              children: [
                {
                  id: "Policy-94",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-190",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-72",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-44",
              type: "Role",
              children: [
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-58",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-118",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-25",
              type: "Role",
              children: [
                {
                  id: "Policy-74",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-178",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-195",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-8",
          type: "User",
          children: [
            {
              id: "Role-13",
              type: "Role",
              children: [
                {
                  id: "Policy-20",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-32",
              type: "Role",
              children: [
                {
                  id: "Policy-129",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-2",
              type: "Role",
              children: [
                {
                  id: "Policy-165",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-9",
          type: "User",
          children: [
            {
              id: "Role-99",
              type: "Role",
              children: [
                {
                  id: "Policy-191",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-31",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-90",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-99",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-50",
              type: "Role",
              children: [
                {
                  id: "Policy-131",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-83",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-10",
          type: "User",
          children: [
            {
              id: "Role-25",
              type: "Role",
              children: [
                {
                  id: "Policy-74",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-178",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-195",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-17",
              type: "Role",
              children: [
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-32",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-86",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-46",
              type: "Role",
              children: [
                {
                  id: "Policy-51",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-11",
          type: "User",
          children: [
            {
              id: "Role-43",
              type: "Role",
              children: [
                {
                  id: "Policy-161",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-88",
              type: "Role",
              children: [
                {
                  id: "Policy-154",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-185",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-4",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-31",
              type: "Role",
              children: [
                {
                  id: "Policy-124",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-12",
          type: "User",
          children: [
            {
              id: "Role-62",
              type: "Role",
              children: [
                {
                  id: "Policy-148",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-33",
              type: "Role",
              children: [
                {
                  id: "Policy-12",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-194",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-77",
              type: "Role",
              children: [
                {
                  id: "Policy-168",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-98",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-13",
          type: "User",
          children: [
            {
              id: "Role-58",
              type: "Role",
              children: [
                {
                  id: "Policy-126",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-27",
              type: "Role",
              children: [
                {
                  id: "Policy-94",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-190",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-72",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-14",
          type: "User",
          children: [
            {
              id: "Role-34",
              type: "Role",
              children: [
                {
                  id: "Policy-9",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-160",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-114",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-108",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-9",
              type: "Role",
              children: [
                {
                  id: "Policy-47",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-150",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-110",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-15",
          type: "User",
          children: [
            {
              id: "Role-66",
              type: "Role",
              children: [
                {
                  id: "Policy-109",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-16",
              type: "Role",
              children: [
                {
                  id: "Policy-71",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-162",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-10",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-30",
              type: "Role",
              children: [
                {
                  id: "Policy-15",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-76",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-60",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-165",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-16",
          type: "User",
          children: [
            {
              id: "Role-86",
              type: "Role",
              children: [
                {
                  id: "Policy-121",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-181",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-106",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-40",
              type: "Role",
              children: [
                {
                  id: "Policy-69",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-56",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-23",
              type: "Role",
              children: [
                {
                  id: "Policy-87",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-17",
          type: "User",
          children: [
            {
              id: "Role-67",
              type: "Role",
              children: [
                {
                  id: "Policy-199",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-49",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-185",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-134",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-18",
          type: "User",
          children: [
            {
              id: "Role-69",
              type: "Role",
              children: [
                {
                  id: "Policy-87",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-56",
              type: "Role",
              children: [
                {
                  id: "Policy-135",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-46",
              type: "Role",
              children: [
                {
                  id: "Policy-51",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-19",
          type: "User",
          children: [
            {
              id: "Role-13",
              type: "Role",
              children: [
                {
                  id: "Policy-20",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-20",
          type: "User",
          children: [
            {
              id: "Role-26",
              type: "Role",
              children: [
                {
                  id: "Policy-120",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-79",
              type: "Role",
              children: [
                {
                  id: "Policy-77",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-15",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-47",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-80",
              type: "Role",
              children: [
                {
                  id: "Policy-187",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-129",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-106",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-21",
          type: "User",
          children: [
            {
              id: "Role-69",
              type: "Role",
              children: [
                {
                  id: "Policy-87",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-12",
              type: "Role",
              children: [
                {
                  id: "Policy-158",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-183",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-126",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-66",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-98",
              type: "Role",
              children: [
                {
                  id: "Policy-154",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-151",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-118",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-194",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-22",
          type: "User",
          children: [
            {
              id: "Role-70",
              type: "Role",
              children: [
                {
                  id: "Policy-88",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-2",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-35",
              type: "Role",
              children: [
                {
                  id: "Policy-151",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-42",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-104",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-127",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-4",
              type: "Role",
              children: [
                {
                  id: "Policy-8",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-184",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-193",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-162",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "Account-3",
      type: "Account",
      children: [
        {
          id: "IAMUser-23",
          type: "User",
          children: [
            {
              id: "Role-56",
              type: "Role",
              children: [
                {
                  id: "Policy-135",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-15",
              type: "Role",
              children: [
                {
                  id: "Policy-5",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-24",
          type: "User",
          children: [
            {
              id: "Role-90",
              type: "Role",
              children: [
                {
                  id: "Policy-45",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-160",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-40",
              type: "Role",
              children: [
                {
                  id: "Policy-69",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-56",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-25",
          type: "User",
          children: [
            {
              id: "Role-84",
              type: "Role",
              children: [
                {
                  id: "Policy-29",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-39",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-38",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-35",
              type: "Role",
              children: [
                {
                  id: "Policy-151",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-42",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-104",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-127",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-21",
              type: "Role",
              children: [
                {
                  id: "Policy-15",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-179",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-123",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-22",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-26",
          type: "User",
          children: [
            {
              id: "Role-66",
              type: "Role",
              children: [
                {
                  id: "Policy-109",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-36",
              type: "Role",
              children: [
                {
                  id: "Policy-77",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-80",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-27",
          type: "User",
          children: [
            {
              id: "Role-67",
              type: "Role",
              children: [
                {
                  id: "Policy-199",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-49",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-185",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-134",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-91",
              type: "Role",
              children: [
                {
                  id: "Policy-67",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-176",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-28",
          type: "User",
          children: [
            {
              id: "Role-39",
              type: "Role",
              children: [
                {
                  id: "Policy-160",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-101",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-19",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-114",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-29",
          type: "User",
          children: [
            {
              id: "Role-25",
              type: "Role",
              children: [
                {
                  id: "Policy-74",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-178",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-195",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-9",
              type: "Role",
              children: [
                {
                  id: "Policy-47",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-150",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-110",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-99",
              type: "Role",
              children: [
                {
                  id: "Policy-191",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-31",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-90",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-99",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-30",
          type: "User",
          children: [
            {
              id: "Role-26",
              type: "Role",
              children: [
                {
                  id: "Policy-120",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-99",
              type: "Role",
              children: [
                {
                  id: "Policy-191",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-31",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-90",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-99",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-31",
          type: "User",
          children: [
            {
              id: "Role-45",
              type: "Role",
              children: [
                {
                  id: "Policy-172",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-193",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-51",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-75",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-12",
              type: "Role",
              children: [
                {
                  id: "Policy-158",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-183",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-126",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-66",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-32",
          type: "User",
          children: [
            {
              id: "Role-19",
              type: "Role",
              children: [
                {
                  id: "Policy-76",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-62",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-8",
              type: "Role",
              children: [
                {
                  id: "Policy-106",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-33",
          type: "User",
          children: [
            {
              id: "Role-39",
              type: "Role",
              children: [
                {
                  id: "Policy-160",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-101",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-19",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-114",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-95",
              type: "Role",
              children: [
                {
                  id: "Policy-26",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-122",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "Account-4",
      type: "Account",
      children: [
        {
          id: "IAMUser-34",
          type: "User",
          children: [
            {
              id: "Role-74",
              type: "Role",
              children: [
                {
                  id: "Policy-53",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-40",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-109",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-114",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-142",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-17",
              type: "Role",
              children: [
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-32",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-86",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-35",
          type: "User",
          children: [
            {
              id: "Role-28",
              type: "Role",
              children: [
                {
                  id: "Policy-153",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-36",
          type: "User",
          children: [
            {
              id: "Role-85",
              type: "Role",
              children: [
                {
                  id: "Policy-99",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-118",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-5",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-179",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-43",
              type: "Role",
              children: [
                {
                  id: "Policy-161",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-97",
              type: "Role",
              children: [
                {
                  id: "Policy-196",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-143",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-37",
          type: "User",
          children: [
            {
              id: "Role-81",
              type: "Role",
              children: [
                {
                  id: "Policy-145",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-70",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-45",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-93",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-195",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-32",
              type: "Role",
              children: [
                {
                  id: "Policy-129",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "Account-5",
      type: "Account",
      children: [
        {
          id: "IAMUser-38",
          type: "User",
          children: [
            {
              id: "Role-53",
              type: "Role",
              children: [
                {
                  id: "Policy-90",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-36",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-177",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-50",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-193",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-39",
          type: "User",
          children: [
            {
              id: "Role-56",
              type: "Role",
              children: [
                {
                  id: "Policy-135",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-27",
              type: "Role",
              children: [
                {
                  id: "Policy-94",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-190",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-72",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-13",
              type: "Role",
              children: [
                {
                  id: "Policy-20",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-40",
          type: "User",
          children: [
            {
              id: "Role-95",
              type: "Role",
              children: [
                {
                  id: "Policy-26",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-122",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-20",
              type: "Role",
              children: [
                {
                  id: "Policy-180",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-69",
              type: "Role",
              children: [
                {
                  id: "Policy-87",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-41",
          type: "User",
          children: [
            {
              id: "Role-14",
              type: "Role",
              children: [
                {
                  id: "Policy-119",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-42",
          type: "User",
          children: [
            {
              id: "Role-36",
              type: "Role",
              children: [
                {
                  id: "Policy-77",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-80",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-17",
              type: "Role",
              children: [
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-32",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-86",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-31",
              type: "Role",
              children: [
                {
                  id: "Policy-124",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-43",
          type: "User",
          children: [
            {
              id: "Role-11",
              type: "Role",
              children: [
                {
                  id: "Policy-10",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-104",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-90",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-155",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-44",
          type: "User",
          children: [
            {
              id: "Role-62",
              type: "Role",
              children: [
                {
                  id: "Policy-148",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-52",
              type: "Role",
              children: [
                {
                  id: "Policy-20",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-175",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-45",
          type: "User",
          children: [
            {
              id: "Role-16",
              type: "Role",
              children: [
                {
                  id: "Policy-71",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-162",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-10",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-46",
          type: "User",
          children: [
            {
              id: "Role-73",
              type: "Role",
              children: [
                {
                  id: "Policy-180",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-26",
              type: "Role",
              children: [
                {
                  id: "Policy-120",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-47",
          type: "User",
          children: [
            {
              id: "Role-45",
              type: "Role",
              children: [
                {
                  id: "Policy-172",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-193",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-51",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-75",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-48",
          type: "User",
          children: [
            {
              id: "Role-56",
              type: "Role",
              children: [
                {
                  id: "Policy-135",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-21",
              type: "Role",
              children: [
                {
                  id: "Policy-15",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-179",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-123",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-22",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-3",
              type: "Role",
              children: [
                {
                  id: "Policy-127",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-116",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-49",
          type: "User",
          children: [
            {
              id: "Role-45",
              type: "Role",
              children: [
                {
                  id: "Policy-172",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-193",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-51",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-75",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-56",
              type: "Role",
              children: [
                {
                  id: "Policy-135",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-50",
          type: "User",
          children: [
            {
              id: "Role-42",
              type: "Role",
              children: [
                {
                  id: "Policy-57",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-159",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-17",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-184",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-8",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-51",
          type: "User",
          children: [
            {
              id: "Role-32",
              type: "Role",
              children: [
                {
                  id: "Policy-129",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-75",
              type: "Role",
              children: [
                {
                  id: "Policy-38",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-125",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-107",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-52",
          type: "User",
          children: [
            {
              id: "Role-79",
              type: "Role",
              children: [
                {
                  id: "Policy-77",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-15",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-47",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-6",
              type: "Role",
              children: [
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-135",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-32",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-53",
          type: "User",
          children: [
            {
              id: "Role-46",
              type: "Role",
              children: [
                {
                  id: "Policy-51",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-96",
              type: "Role",
              children: [
                {
                  id: "Policy-190",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-160",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-136",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-54",
          type: "User",
          children: [
            {
              id: "Role-17",
              type: "Role",
              children: [
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-32",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-86",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-55",
          type: "User",
          children: [
            {
              id: "Role-41",
              type: "Role",
              children: [
                {
                  id: "Policy-58",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-96",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-61",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-4",
              type: "Role",
              children: [
                {
                  id: "Policy-8",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-184",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-193",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-162",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-56",
          type: "User",
          children: [
            {
              id: "Role-37",
              type: "Role",
              children: [
                {
                  id: "Policy-173",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "Account-6",
      type: "Account",
      children: [
        {
          id: "IAMUser-57",
          type: "User",
          children: [
            {
              id: "Role-43",
              type: "Role",
              children: [
                {
                  id: "Policy-161",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-58",
          type: "User",
          children: [
            {
              id: "Role-67",
              type: "Role",
              children: [
                {
                  id: "Policy-199",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-49",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-185",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-134",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-59",
          type: "User",
          children: [
            {
              id: "Role-53",
              type: "Role",
              children: [
                {
                  id: "Policy-90",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-36",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-177",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-50",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-193",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-47",
              type: "Role",
              children: [
                {
                  id: "Policy-85",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-105",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-184",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-78",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-82",
              type: "Role",
              children: [
                {
                  id: "Policy-149",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-34",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-1",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-60",
          type: "User",
          children: [
            {
              id: "Role-75",
              type: "Role",
              children: [
                {
                  id: "Policy-38",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-125",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-107",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-61",
          type: "User",
          children: [
            {
              id: "Role-97",
              type: "Role",
              children: [
                {
                  id: "Policy-196",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-143",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-62",
          type: "User",
          children: [
            {
              id: "Role-37",
              type: "Role",
              children: [
                {
                  id: "Policy-173",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-63",
          type: "User",
          children: [
            {
              id: "Role-83",
              type: "Role",
              children: [
                {
                  id: "Policy-70",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-64",
          type: "User",
          children: [
            {
              id: "Role-49",
              type: "Role",
              children: [
                {
                  id: "Policy-39",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-139",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-59",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-76",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-163",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-25",
              type: "Role",
              children: [
                {
                  id: "Policy-74",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-178",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-195",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-65",
          type: "User",
          children: [
            {
              id: "Role-92",
              type: "Role",
              children: [
                {
                  id: "Policy-42",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-9",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-13",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-40",
              type: "Role",
              children: [
                {
                  id: "Policy-69",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-56",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-66",
          type: "User",
          children: [
            {
              id: "Role-37",
              type: "Role",
              children: [
                {
                  id: "Policy-173",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-87",
              type: "Role",
              children: [
                {
                  id: "Policy-172",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-70",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-111",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-23",
              type: "Role",
              children: [
                {
                  id: "Policy-87",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-67",
          type: "User",
          children: [
            {
              id: "Role-15",
              type: "Role",
              children: [
                {
                  id: "Policy-5",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-62",
              type: "Role",
              children: [
                {
                  id: "Policy-148",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-11",
              type: "Role",
              children: [
                {
                  id: "Policy-10",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-104",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-90",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-155",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-68",
          type: "User",
          children: [
            {
              id: "Role-74",
              type: "Role",
              children: [
                {
                  id: "Policy-53",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-40",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-109",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-114",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-142",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-36",
              type: "Role",
              children: [
                {
                  id: "Policy-77",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-80",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-69",
          type: "User",
          children: [
            {
              id: "Role-66",
              type: "Role",
              children: [
                {
                  id: "Policy-109",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-77",
              type: "Role",
              children: [
                {
                  id: "Policy-168",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-98",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-4",
              type: "Role",
              children: [
                {
                  id: "Policy-8",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-184",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-193",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-162",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-70",
          type: "User",
          children: [
            {
              id: "Role-63",
              type: "Role",
              children: [
                {
                  id: "Policy-10",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-139",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-19",
              type: "Role",
              children: [
                {
                  id: "Policy-76",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-62",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-71",
          type: "User",
          children: [
            {
              id: "Role-77",
              type: "Role",
              children: [
                {
                  id: "Policy-168",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-98",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-72",
          type: "User",
          children: [
            {
              id: "Role-65",
              type: "Role",
              children: [
                {
                  id: "Policy-101",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-33",
              type: "Role",
              children: [
                {
                  id: "Policy-12",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-194",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-16",
              type: "Role",
              children: [
                {
                  id: "Policy-71",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-162",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-10",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-73",
          type: "User",
          children: [
            {
              id: "Role-80",
              type: "Role",
              children: [
                {
                  id: "Policy-187",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-129",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-106",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-74",
          type: "User",
          children: [
            {
              id: "Role-70",
              type: "Role",
              children: [
                {
                  id: "Policy-88",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-2",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-75",
          type: "User",
          children: [
            {
              id: "Role-31",
              type: "Role",
              children: [
                {
                  id: "Policy-124",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-76",
          type: "User",
          children: [
            {
              id: "Role-89",
              type: "Role",
              children: [
                {
                  id: "Policy-192",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-125",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-119",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-55",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-139",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-70",
              type: "Role",
              children: [
                {
                  id: "Policy-88",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-2",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "Account-7",
      type: "Account",
      children: [
        {
          id: "IAMUser-77",
          type: "User",
          children: [
            {
              id: "Role-65",
              type: "Role",
              children: [
                {
                  id: "Policy-101",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-78",
          type: "User",
          children: [
            {
              id: "Role-68",
              type: "Role",
              children: [
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-173",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-183",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-163",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-122",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-79",
          type: "User",
          children: [
            {
              id: "Role-11",
              type: "Role",
              children: [
                {
                  id: "Policy-10",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-104",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-90",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-155",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-36",
              type: "Role",
              children: [
                {
                  id: "Policy-77",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-80",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-80",
          type: "User",
          children: [
            {
              id: "Role-71",
              type: "Role",
              children: [
                {
                  id: "Policy-70",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-111",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-147",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-60",
              type: "Role",
              children: [
                {
                  id: "Policy-140",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-79",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-35",
              type: "Role",
              children: [
                {
                  id: "Policy-151",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-42",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-104",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-127",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-81",
          type: "User",
          children: [
            {
              id: "Role-31",
              type: "Role",
              children: [
                {
                  id: "Policy-124",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-82",
          type: "User",
          children: [
            {
              id: "Role-20",
              type: "Role",
              children: [
                {
                  id: "Policy-180",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-79",
              type: "Role",
              children: [
                {
                  id: "Policy-77",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-15",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-47",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-77",
              type: "Role",
              children: [
                {
                  id: "Policy-168",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-98",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-83",
          type: "User",
          children: [
            {
              id: "Role-73",
              type: "Role",
              children: [
                {
                  id: "Policy-180",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-68",
              type: "Role",
              children: [
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-173",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-183",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-163",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-122",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-84",
          type: "User",
          children: [
            {
              id: "Role-71",
              type: "Role",
              children: [
                {
                  id: "Policy-70",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-111",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-147",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-30",
              type: "Role",
              children: [
                {
                  id: "Policy-15",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-76",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-60",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-165",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-85",
          type: "User",
          children: [
            {
              id: "Role-83",
              type: "Role",
              children: [
                {
                  id: "Policy-70",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-58",
              type: "Role",
              children: [
                {
                  id: "Policy-126",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-86",
          type: "User",
          children: [
            {
              id: "Role-51",
              type: "Role",
              children: [
                {
                  id: "Policy-160",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-167",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-195",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-87",
          type: "User",
          children: [
            {
              id: "Role-38",
              type: "Role",
              children: [
                {
                  id: "Policy-134",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-94",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-88",
          type: "User",
          children: [
            {
              id: "Role-33",
              type: "Role",
              children: [
                {
                  id: "Policy-12",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-194",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-72",
              type: "Role",
              children: [
                {
                  id: "Policy-122",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "Account-8",
      type: "Account",
      children: [
        {
          id: "IAMUser-89",
          type: "User",
          children: [
            {
              id: "Role-64",
              type: "Role",
              children: [
                {
                  id: "Policy-61",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-13",
              type: "Role",
              children: [
                {
                  id: "Policy-20",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-90",
          type: "User",
          children: [
            {
              id: "Role-36",
              type: "Role",
              children: [
                {
                  id: "Policy-77",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-80",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-61",
              type: "Role",
              children: [
                {
                  id: "Policy-8",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-91",
          type: "User",
          children: [
            {
              id: "Role-56",
              type: "Role",
              children: [
                {
                  id: "Policy-135",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-80",
              type: "Role",
              children: [
                {
                  id: "Policy-187",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-129",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-106",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-12",
              type: "Role",
              children: [
                {
                  id: "Policy-158",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-183",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-126",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-66",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-92",
          type: "User",
          children: [
            {
              id: "Role-12",
              type: "Role",
              children: [
                {
                  id: "Policy-158",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-183",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-126",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-66",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-54",
              type: "Role",
              children: [
                {
                  id: "Policy-120",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-88",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-2",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-74",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-93",
          type: "User",
          children: [
            {
              id: "Role-56",
              type: "Role",
              children: [
                {
                  id: "Policy-135",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-94",
          type: "User",
          children: [
            {
              id: "Role-18",
              type: "Role",
              children: [
                {
                  id: "Policy-29",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-35",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-6",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-64",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-17",
              type: "Role",
              children: [
                {
                  id: "Policy-44",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-32",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-86",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-2",
              type: "Role",
              children: [
                {
                  id: "Policy-165",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-95",
          type: "User",
          children: [
            {
              id: "Role-29",
              type: "Role",
              children: [
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-159",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-96",
          type: "User",
          children: [
            {
              id: "Role-11",
              type: "Role",
              children: [
                {
                  id: "Policy-10",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-104",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-90",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-155",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-32",
              type: "Role",
              children: [
                {
                  id: "Policy-129",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-52",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-117",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-65",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "Account-9",
      type: "Account",
      children: [
        {
          id: "IAMUser-97",
          type: "User",
          children: [
            {
              id: "Role-25",
              type: "Role",
              children: [
                {
                  id: "Policy-74",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-178",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-195",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-3",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-8",
              type: "Role",
              children: [
                {
                  id: "Policy-106",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-89",
              type: "Role",
              children: [
                {
                  id: "Policy-192",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-125",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-119",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-55",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-139",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-98",
          type: "User",
          children: [
            {
              id: "Role-88",
              type: "Role",
              children: [
                {
                  id: "Policy-154",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-185",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-4",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-42",
              type: "Role",
              children: [
                {
                  id: "Policy-57",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-159",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-17",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-184",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-8",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-99",
          type: "User",
          children: [
            {
              id: "Role-35",
              type: "Role",
              children: [
                {
                  id: "Policy-151",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-42",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-104",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-127",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-100",
          type: "User",
          children: [
            {
              id: "Role-37",
              type: "Role",
              children: [
                {
                  id: "Policy-173",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-86",
              type: "Role",
              children: [
                {
                  id: "Policy-121",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-181",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-106",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-7",
              type: "Role",
              children: [
                {
                  id: "Policy-12",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-78",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "ec2:StopInstances",
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-32",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "ec2:StopInstances",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-109",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-101",
          type: "User",
          children: [
            {
              id: "Role-73",
              type: "Role",
              children: [
                {
                  id: "Policy-180",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "ec2:StopInstances",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-8",
              type: "Role",
              children: [
                {
                  id: "Policy-106",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-100",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-102",
          type: "User",
          children: [
            {
              id: "Role-5",
              type: "Role",
              children: [
                {
                  id: "Policy-144",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-15",
              type: "Role",
              children: [
                {
                  id: "Policy-5",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-103",
          type: "User",
          children: [
            {
              id: "Role-67",
              type: "Role",
              children: [
                {
                  id: "Policy-199",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-49",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-185",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "ec2:StartInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-134",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-41",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-77",
              type: "Role",
              children: [
                {
                  id: "Policy-168",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-98",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-44",
              type: "Role",
              children: [
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-58",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "s3:ListBucket",
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-118",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-104",
          type: "User",
          children: [
            {
              id: "Role-6",
              type: "Role",
              children: [
                {
                  id: "Policy-37",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "ec2:StopInstances",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-135",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-32",
                  type: "Policy",
                  permissions: [
                    "s3:ListBucket",
                    "iam:AttachPolicy",
                    "iam:CreateUser",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-30",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-23",
              type: "Role",
              children: [
                {
                  id: "Policy-87",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "s3:ListBucket",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "Account-10",
      type: "Account",
      children: [
        {
          id: "IAMUser-105",
          type: "User",
          children: [
            {
              id: "Role-46",
              type: "Role",
              children: [
                {
                  id: "Policy-51",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-106",
          type: "User",
          children: [
            {
              id: "Role-70",
              type: "Role",
              children: [
                {
                  id: "Policy-88",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-2",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "s3:ListBucket"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-78",
              type: "Role",
              children: [
                {
                  id: "Policy-169",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances",
                    "lambda:InvokeFunction",
                    "iam:AttachPolicy"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-171",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "ec2:StartInstances",
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: true
                },
                {
                  id: "Policy-127",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-122",
                  type: "Policy",
                  permissions: [
                    "ec2:StartInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-107",
          type: "User",
          children: [
            {
              id: "Role-64",
              type: "Role",
              children: [
                {
                  id: "Policy-61",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy"
                  ],
                  writePermission: false
                }
              ]
            },
            {
              id: "Role-61",
              type: "Role",
              children: [
                {
                  id: "Policy-8",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                }
              ]
            }
          ]
        },
        {
          id: "IAMUser-108",
          type: "User",
          children: [
            {
              id: "Role-77",
              type: "Role",
              children: [
                {
                  id: "Policy-168",
                  type: "Policy",
                  permissions: [
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-98",
                  type: "Policy",
                  permissions: [
                    "ec2:StopInstances",
                    "iam:CreateUser"
                  ],
                  writePermission: true
                }
              ]
            },
            {
              id: "Role-52",
              type: "Role",
              children: [
                {
                  id: "Policy-20",
                  type: "Policy",
                  permissions: [
                    "lambda:InvokeFunction",
                    "ec2:StartInstances",
                    "s3:ListBucket",
                    "iam:CreateUser",
                    "iam:AttachPolicy",
                    "ec2:StopInstances"
                  ],
                  writePermission: false
                },
                {
                  id: "Policy-175",
                  type: "Policy",
                  permissions: [
                    "iam:AttachPolicy",
                    "ec2:StopInstances",
                    "iam:CreateUser",
                    "s3:ListBucket",
                    "lambda:InvokeFunction"
                  ],
                  writePermission: true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
